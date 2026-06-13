import { Router, type Request, type Response } from "express";

const router = Router();

router.post('/enquiry', (req: Request, res: Response) => {
    const data = req.body;

    const Name = data.name;
    const ParentNumber = data.mobile || data.phone;
    const Email = data.email;

    if (!Name || !ParentNumber || !Email) {
        res.status(400).json({ message: 'Please fill all the details' });
        return;
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(Email)) {
        res.status(400).json({ message: 'Please enter a valid email address' });
        return;
    }

    // Phone number validation (allows optional + and 10-15 digits with spaces/dashes)
    const phoneRegex = /^\+?[\d\s\-]{10,15}$/;
    if (!phoneRegex.test(ParentNumber)) {
        res.status(400).json({ message: 'Please enter a valid phone number' });
        return;
    }

    res.json({ message: 'Enquiry Form Recieved' });
});

export default router;