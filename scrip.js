<script>
        function validatePassword() {
            const passwordInput = document.getElementById('password');
            const warningLabel = document.getElementById('passwordWarning');
            const password = passwordInput.value;
            const hasUpperCase = /[A-Z]/.test(password);
            const hasLowerCase = /[a-z]/.test(password);

            if (password.length < 8) {
                warningLabel.textContent = 'La contraseña debe tener al menos 8 caracteres.';
                warningLabel.style.display = 'block';
            } else if (!hasUpperCase || !hasLowerCase) {
                warningLabel.textContent = 'La contraseña debe tener letras mayúsculas y minúsculas.';
                warningLabel.style.display = 'block';
            } else {
                warningLabel.style.display = 'none';
        
}

                
    </script>
