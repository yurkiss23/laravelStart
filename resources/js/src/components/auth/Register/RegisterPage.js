import React, { Component } from "react";
import TextFieldGroup from "../../common/TextFieldGroup";
import ImageFieldGroupCropper from "../../common/ImageFieldGroupCropper";
import PhoneFieldGroup from "../../common/PhoneFieldGroup";

export class RegisterPage extends Component {
    state = {
        email: "",
        phone: "",
        photo: "",
        dateBirth: "",
        password: "",
        passwordConfirm: "",
        errors: {
            //email: 'Invalid'
        }
    };

    setStateByErrors = (name, value) => {
        if (!!this.state.errors[name]) {
            let errors = Object.assign({}, this.state.errors);
            delete errors[name];
            this.setState({
                [name]: value,
                errors
            });
        } else {
            this.setState({ [name]: value });
        }
    };

    handleChange = e => {
        this.setStateByErrors(e.target.name, e.target.value);
    };

    handleSubmit = e => {
        e.preventDefault();
        console.log("--register submit--");
        const { email, photo, phone } = this.state;
        let errors = {};

        if (email === "") errors.email = "Поле не може бути пустим!";
        if (photo === "") errors.photo = "Закинь фотку!";
        if (phone === "") errors.phone = "Дай номер!";

        const isValid = Object.keys(errors).length === 0;

        if (isValid) {
            // console.log("Model is Valid");
            // console.log("Model is Valid");
            //ajax axios post
        } else {
            this.setState({ errors });
        }
    };

    getCroppedImage = img => {
        if (!!this.state.errors["photo"]) {
            let errors = Object.assign({}, this.state.errors);
            delete errors["photo"];
            this.setState({
                photo: img,
                errors
            });
        } else {
            this.setState({ photo: img });
        }
    };

    render() {
        const {
            email,
            phone,
            photo,
            password,
            passwordConfirm,
            dateBirth,
            errors
        } = this.state;

        return (
            <div className="container">
                <h1 className="d-flex justify-content-center">Реєстрація</h1>
                <form name="form" onSubmit={this.handleSubmit}>
                    <TextFieldGroup
                        field="email"
                        label="Електронна пошта"
                        value={email}
                        error={errors.email}
                        onChange={this.handleChange}
                    />

                    <PhoneFieldGroup
                        field="phone"
                        label="Телефон"
                        value={phone}
                        error={errors.phone}
                        onChange={this.handleChange}
                    />

                    <ImageFieldGroupCropper
                        getCroppedImage={this.getCroppedImage}
                        error={errors.photo}
                        photo={photo}
                    />

                    <TextFieldGroup
                        field="dateBirth"
                        label="Дата народження"
                        value={dateBirth}
                        error={errors.dateBirth}
                        onChange={this.handleChange}
                        type="date"
                    />

                    <TextFieldGroup
                        field="password"
                        label="Пароль"
                        value={password}
                        error={errors.password}
                        onChange={this.handleChange}
                        type="password"
                    />

                    <TextFieldGroup
                        field="passwordConfirm"
                        label="Підтверження пароля"
                        value={passwordConfirm}
                        error={errors.passwordConfirm}
                        onChange={this.handleChange}
                        type="password"
                    />

                    <div className="form-group">
                        <button className="btn btn-primary">
                            Зареєструватися
                        </button>
                    </div>
                </form>
            </div>
        );
    }
}

export default RegisterPage;