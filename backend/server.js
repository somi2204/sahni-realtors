import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import nodemailer from "nodemailer";
import dotenv from "dotenv";

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

/* ======================
   MONGODB CONNECTION
====================== */
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log("✅ MongoDB connected"))
  .catch((err) => console.log("❌ MongoDB ERROR:", err));

/* ======================
   SCHEMA
====================== */
const leadSchema = new mongoose.Schema(
  {
    name: String,
    email: String,
    phone: String,

    // rent/buy form
    property: String,
    message: String,

    // home value form
    intent: String,
    type: String,
    location: String,
    bedrooms: String,
    bathrooms: String,
    size: String,

    formType: String,
  },
  { timestamps: true }
);

const Lead = mongoose.model("Lead", leadSchema);

/* ======================
   EMAIL CONFIG
====================== */
const transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 587,
  secure: false,
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
  tls: {
    rejectUnauthorized: false, // fixes certificate error
  },
});

/* ======================
   ROUTE
====================== */
app.post("/send-email", async (req, res) => {
  try {
    const {
      name,
      email,
      phone,
      property,
      message,

      intent,
      type,
      location,
      bedrooms,
      bathrooms,
      size,

      formType,
    } = req.body;

    /* ======================
       SAVE TO DATABASE
    ====================== */
    //await Lead.create(req.body);

    /* ======================
       EMAIL FORMAT LOGIC
    ====================== */
    let emailHTML;

    if (formType === "homeValue") {
      emailHTML = `
        <h2>🏠 Home Value Inquiry</h2>

        <p><b>Name:</b> ${name}</p>
        <p><b>Email:</b> ${email}</p>
        <p><b>Phone:</b> ${phone}</p>

        <hr>

        <p><b>Intent:</b> ${intent}</p>
        <p><b>Property Type:</b> ${type}</p>
        <p><b>Location:</b> ${location}</p>
        <p><b>Bedrooms:</b> ${bedrooms}</p>
        <p><b>Bathrooms:</b> ${bathrooms}</p>
        <p><b>Size:</b> ${size}</p>

        <hr>

        <p><b>Additional Message:</b></p>
        <div style="background:#f5f5f5; padding:10px; border-radius:8px;">
          ${message || "N/A"}
        </div>
      `;
    } else {
      // 🔥 Rent / Buy form (UNCHANGED)
      emailHTML = `
        <h2>📩 New Inquiry</h2>

        <p><b>Name:</b> ${name}</p>
        <p><b>Email:</b> ${email}</p>
        <p><b>Phone:</b> ${phone}</p>
        <p><b>Property:</b> ${property}</p>

        <p><b>Message:</b></p>
        <div style="background:#f5f5f5; padding:10px; border-radius:8px;">
          ${message}
        </div>
      `;
    }

    /* ======================
       SEND EMAIL
    ====================== */
    await transporter.sendMail({
      from: process.env.EMAIL_USER,
      to: process.env.EMAIL_USER,
      subject: "New Inquiry",
      html: emailHTML,
    });

    res.json({ message: "Inquiry sent!" });

  } catch (err) {
  console.error("❌ FULL ERROR:", err);
  res.status(500).json({ message: err.message });
}
});

/* ======================
   SERVER
====================== */
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
});