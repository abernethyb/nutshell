
const registrationConverter = () => {
        const registrationHTML =
        `
        <div id="simpleModal" class="modal">
            <div class="modal__contents">
                <span class="modal__close_bar">X</span>
                <fieldset>
                    <label for="email">Email:</label>
                    <input type="email" name="email" id="email" class="email" placeholder="Email">
                </fieldset>    
                <fieldset>
                    <label for="username">Username:</label>
                    <input type="text" name="username" id="username1" class="username" placeholder="Username">
                </fieldset>
                <fieldset>   
                    <label for="password">Password:</label>
                    <input type="password" name="password" id="password1" class="password" placeholder="Password">
                </fieldset>
                <fieldset>
                    <label for="username">Retype Password</label>
                    <input type="password" name="password2" id="password2" class="password2" placeholder="Retype Password">
                </fieldset>
            <button type="button" id="register">Register New Account</button>
        </div>
    `
    return registrationHTML
}

export default registrationConverter;