const { classify } = require('../services/classifyService');

/**
 * Controller to handle number classification request
 */
exports.classifyNumber = async (req, res) => {
    const { number } = req.query;

    // Validate input: Ensure number is an integer
    if (!number || isNaN(number) || !Number.isInteger(Number(number))) {
        return res.status(400).json({ number, error: true });
    }

    try {
        // Get classification details
        const result = await classify(Number(number));
        res.json(result);
    } catch (error) {
        res.status(500).json({ error: "Internal Server Error" });
    }
};
