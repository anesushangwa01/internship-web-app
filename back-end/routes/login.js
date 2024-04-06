const { route } = require("./jobapplication");

router.post("/", async (req, res) => {
    try {
        const { email, password } = req.body;

        // Find the user by email
        const user = await register.findOne({ email });
        if (!user) {
            return res.status(404).json({ message: 'User not found' });
        }

        // Compare the provided password with the hashed password
        const isPasswordValid = await bcrypt.compare(password, user.password);
        if (!isPasswordValid) {
            return res.status(401).json({ message: 'Invalid credentials' });
        }

        // If the password is valid, return success message
        res.status(200).json({ message: 'Login successful' });

    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

module.exports = route