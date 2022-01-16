import * as Styled from "./CheckOutForm.styled";
import { useState, useEffect, useRef } from "react";
import { store, persistor } from "../../redux/store";
import { useSelector } from "react-redux";
import Modal from "react-modal";
import { Link, useNavigate } from "react-router-dom";
import CloseIcon from "@material-ui/icons/Close";

import {
    useStripe,
    useElements,
    CardNumberElement,
    CardExpiryElement,
    CardCvcElement,
} from "@stripe/react-stripe-js";
import axios from "axios";

const customStyles = {
    content: {
        display: "flex",
        flexDirection: "column",
        top: "50%",
        left: "50%",
        right: "auto",
        bottom: "auto",
        marginRight: "-50%",
        transform: "translate(-50%, -50%)",
    },
};

Modal.setAppElement(document.getElementById("root"));

export const CheckoutForm = () => {
    const navigate = useNavigate();
    const cart = useSelector((state) => state);
    const [FormError, setFormError] = useState("");
    const [successResMessage, setSuccessResMessage] = useState("");
    const [failureResMessage, setFailureResMessage] = useState("");
    const stripe = useStripe();
    const elements = useElements();
    const [modalIsOpen, setModalIsOpen] = useState(false);

    const firstUpdate = useRef(true);
    useEffect(() => {
        if (firstUpdate.current) {
            firstUpdate.current = false;
            return;
        } else {
            const timer = setTimeout(() => {
                store.dispatch({
                    type: "RESET",
                });
                persistor.purge();
                navigate("/");
            }, 3000);

            return () => clearTimeout(timer);
        }
    }, [navigate, successResMessage]);

    const closeModal = () => {
        setModalIsOpen(false);
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        const { error, paymentMethod } = await stripe.createPaymentMethod({
            type: "card",
            card: elements.getElement(CardNumberElement),
        });

        if (!error) {
            try {
                const { id } = paymentMethod;
                const response = await axios.post(
                    "http://localhost:5000/stripe/charge",
                    {
                        amount: cart.total * 100,
                        id: id,
                        cart: cart,
                    }
                );

                if (response.data.success) {
                    setSuccessResMessage(response.data.message);
                    setModalIsOpen(true);
                } else {
                    setFailureResMessage(response.data.message);
                    setModalIsOpen(true);
                }
            } catch (error) {
                setFormError(error.message);
            }
        } else {
            setFormError(error.message);
        }
    };

    return (
        <Styled.CheckoutFormContainer>
            <Styled.StripePayForm onSubmit={handleSubmit}>
                <Styled.GoBackBtn>
                    <Link to="/cart">Go Back</Link>
                </Styled.GoBackBtn>
                <Styled.StripePayHeading>
                    ENTER YOUR CARD INFO:
                </Styled.StripePayHeading>
                {FormError && <Styled.Error>{FormError}</Styled.Error>}
                <Styled.StripePayElementsWrapper>
                    <Styled.FormLabel>Card number:</Styled.FormLabel>
                    <Styled.CardNumberElementWrapper>
                        <CardNumberElement />
                    </Styled.CardNumberElementWrapper>
                    <Styled.FormLabel>Expiry:</Styled.FormLabel>
                    <Styled.CardExpiryElementWrapper>
                        <CardExpiryElement />
                    </Styled.CardExpiryElementWrapper>
                    <Styled.FormLabel>CVC:</Styled.FormLabel>
                    <Styled.CardCvcElementWrapper>
                        <CardCvcElement />
                    </Styled.CardCvcElementWrapper>
                </Styled.StripePayElementsWrapper>

                <Styled.StripePayFormBtn>Pay</Styled.StripePayFormBtn>
            </Styled.StripePayForm>

            <Styled.Info>
                <Styled.StripePayHeading>YOUR ORDER:</Styled.StripePayHeading>
                {cart.products.map((product) => (
                    <Styled.Product key={product._id}>
                        <Styled.Image src={product.img} />
                        <Styled.ProductDetail>
                            <Styled.Details>
                                <Styled.ProductName>
                                    <b>Product:</b> {product.title}
                                </Styled.ProductName>
                                <Styled.ProductId>
                                    <b>ID:</b> {product._id}
                                </Styled.ProductId>
                                <Styled.ProductColor color={product.color} />
                            </Styled.Details>

                            <Styled.PriceDetail>
                                <Styled.ProductAmountContainer>
                                    <Styled.ProductAmount>
                                        {product.quantity}
                                    </Styled.ProductAmount>
                                </Styled.ProductAmountContainer>
                                <Styled.ProductPrice>
                                    $ {product.price * product.quantity}
                                </Styled.ProductPrice>
                            </Styled.PriceDetail>
                        </Styled.ProductDetail>
                    </Styled.Product>
                ))}
                <Styled.Hr />
            </Styled.Info>

            {successResMessage && (
                <Modal
                    isOpen={modalIsOpen}
                    onRequestClose={closeModal}
                    style={customStyles}
                    contentLabel="Payment Modal 1"
                    shouldCloseOnOverlayClick={false}
                >
                    <Styled.ModalMessage>
                        {successResMessage}, Redirecting To Home Page ...
                    </Styled.ModalMessage>
                </Modal>
            )}

            {failureResMessage && (
                <Modal
                    isOpen={modalIsOpen}
                    onRequestClose={closeModal}
                    style={customStyles}
                    contentLabel="Payment Modal 2"
                    shouldCloseOnOverlayClick={false}
                >
                    <Styled.CloseModal onClick={closeModal}>
                        <CloseIcon />
                    </Styled.CloseModal>

                    <Styled.ModalMessage>
                        {failureResMessage}
                    </Styled.ModalMessage>
                </Modal>
            )}
        </Styled.CheckoutFormContainer>
    );
};

export default CheckoutForm;
