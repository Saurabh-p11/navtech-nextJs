import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { name, email, phone, preferred_date, time_slot } = body;

    if (!name || !email || !phone || !preferred_date || !time_slot) {
      return NextResponse.json({ message: "All fields are required." }, { status: 400 });
    }

    // Send email
    const emailResponse = await resend.emails.send({
      from: "Navtech <saurabh.p@devbypatil.com>",
      to: "sp1141997@gmail.com", 
      subject: "New Demo Booking",
      html: `
        <h2>New Demo Booking</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone}</p>
        <p><strong>Date:</strong> ${preferred_date}</p>
        <p><strong>Time Slot:</strong> ${time_slot}</p>
      `,
    });

    console.log("Email sent:", emailResponse);

    return NextResponse.json({ message: "Your demo has been scheduled!" }, { status: 200 });
  } catch (error) {
    console.error("Error sending email:", error);
    return NextResponse.json({ message: "Invalid request." }, { status: 400 });
  }
}
