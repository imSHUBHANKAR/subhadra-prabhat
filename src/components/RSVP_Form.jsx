// import React, { useState } from "react";
// import emailjs from "@emailjs/browser";

// export default function RSVPSection() {
//   const [formData, setFormData] = useState({
//     name: "",
//     phone: "",
//     guests: "1",
//     attend: "yes",
//     message: "",
//   });

//   const handleChange = (e) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     console.log(formData);
//     alert("RSVP Submitted!");
//   };

//   return (
//     <div className="min-h-screen bg-[#efe3d3] flex flex-col items-center justify-center px-4 py-16">

//       {/* Header */}
//       <h1 className="text-4xl md:text-5xl text-red-800 font-serif mb-2">
//         RSVP
//       </h1>
//       <p className="text-gray-600 mb-10">
//         Please confirm your attendance
//       </p>

//       {/* Form Card */}
//       <form
//         onSubmit={handleSubmit}
//         className="w-full max-w-3xl bg-gray-100 rounded-2xl border border-yellow-500 shadow-lg p-6 md:p-10"
//       >

//         {/* Full Name */}
//         <div className="mb-5">
//           <label className="block text-gray-700 mb-2 font-medium">
//             Full Name *
//           </label>
//           <input
//             type="text"
//             name="name"
//             required
//             value={formData.name}
//             onChange={handleChange}
//             className="w-full px-4 py-3 rounded-xl border border-yellow-500 bg-transparent outline-none focus:ring-2 focus:ring-yellow-400"
//           />
//         </div>

//         {/* Phone */}
//         <div className="mb-5">
//           <label className="block text-gray-700 mb-2 font-medium">
//             Phone Number *
//           </label>
//           <input
//             type="tel"
//             name="phone"
//             required
//             value={formData.phone}
//             onChange={handleChange}
//             className="w-full px-4 py-3 rounded-xl border border-yellow-500 bg-transparent outline-none focus:ring-2 focus:ring-yellow-400"
//           />
//         </div>

//         {/* Guests + Attend */}
//         <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-5">

//           {/* Guests */}
//           <div>
//             <label className="block text-gray-700 mb-2 font-medium">
//               Number of Guests *
//             </label>
//             <select
//               name="guests"
//               value={formData.guests}
//               onChange={handleChange}
//               className="w-full px-4 py-3 rounded-xl border border-yellow-500 bg-transparent outline-none"
//             >
//               {[1,2,3,4,5].map((n) => (
//                 <option key={n}>{n}</option>
//               ))}
//             </select>
//           </div>

//           {/* Attend */}
//           <div>
//             <label className="block text-gray-700 mb-2 font-medium">
//               Will Attend? *
//             </label>
//             <select
//               name="attend"
//               value={formData.attend}
//               onChange={handleChange}
//               className="w-full px-4 py-3 rounded-xl border border-yellow-500 bg-transparent outline-none"
//             >
//               <option value="yes">Yes, I'll be there!</option>
//               <option value="no">Sorry, can't attend</option>
//             </select>
//           </div>
//         </div>

//         {/* Message */}
//         <div className="mb-6">
//           <label className="block text-gray-700 mb-2 font-medium">
//             Message (Optional)
//           </label>
//           <textarea
//             name="message"
//             rows="4"
//             value={formData.message}
//             onChange={handleChange}
//             placeholder="Share your thoughts or dietary requirements..."
//             className="w-full px-4 py-3 rounded-xl border border-yellow-500 bg-transparent outline-none focus:ring-2 focus:ring-yellow-400 resize-none"
//           />
//         </div>

//         {/* Submit */}
//         <button
//           type="submit"
//           className="w-full py-3 rounded-xl bg-red-800 text-yellow-400 font-semibold hover:bg-red-900 transition shadow-md"
//         >
//           Submit RSVP
//         </button>
//       </form>
//     </div>
//   );
// }

//-------------------------------------------------------------------------------
//------------------------------------------------------------------------------
//-------------------------100% working code---------------------------------------
// import React, { useState } from "react";
// import emailjs from "emailjs-com";

// export default function RSVP() {
//   const [formData, setFormData] = useState({
//     name: "",
//     phone: "",
//     guests: "1",
//     attend: "yes",
//     message: "",
//   });

//   const [loading, setLoading] = useState(false);

//   const handleChange = (e) => {
//     setFormData({
//       ...formData,
//       [e.target.name]: e.target.value,
//     });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     setLoading(true);

//     emailjs
//       .send(
//         "service_kkeerpp",
//         "template_n5faqqs",
//         {
//           name: formData.name,
//           phone: formData.phone,
//           guests: formData.guests,
//           attend: formData.attend,
//           message: formData.message || "No message",
//         },
//         "5CE0Rdx5PIf4FPc_a"
//       )
//       .then(() => {
//         alert("✅ RSVP Sent Successfully!");

//         // WhatsApp Message
//         const msg = `Wedding RSVP:
// Name: ${formData.name}
// Phone: ${formData.phone}
// Guests: ${formData.guests}
// Attend: ${formData.attend}
// Message: ${formData.message}`;

//         window.open(
//           `https://wa.me/917808709989?text=${encodeURIComponent(msg)}`,
//           "_blank"
//         );

//         // Reset
//         setFormData({
//           name: "",
//           phone: "",
//           guests: "1",
//           attend: "yes",
//           message: "",
//         });
//       })
//       .catch((error) => {
//         console.error("ERROR:", error);
//         alert("❌ Failed to send RSVP. Check console (F12)");
//       })
//       .finally(() => setLoading(false));
//   };

//   return (
//     <div className="min-h-screen flex items-center justify-center bg-[#efe3d3] px-4">

//       <form
//         onSubmit={handleSubmit}
//         className="bg-white p-8 rounded-xl border border-yellow-500 w-full max-w-xl"
//       >
//         <h2 className="text-3xl text-center text-red-800 mb-6">RSVP</h2>

//         <input
//           type="text"
//           name="name"
//           placeholder="Full Name"
//           required
//           value={formData.name}
//           onChange={handleChange}
//           className="w-full mb-4 p-3 border border-yellow-500 rounded"
//         />

//         <input
//           type="tel"
//           name="phone"
//           placeholder="Phone Number"
//           required
//           value={formData.phone}
//           onChange={handleChange}
//           className="w-full mb-4 p-3 border border-yellow-500 rounded"
//         />

//         <select
//           name="guests"
//           value={formData.guests}
//           onChange={handleChange}
//           className="w-full mb-4 p-3 border border-yellow-500 rounded"
//         >
//           {[1, 2, 3, 4, 5].map((n) => (
//             <option key={n}>{n}</option>
//           ))}
//         </select>

//         <select
//           name="attend"
//           value={formData.attend}
//           onChange={handleChange}
//           className="w-full mb-4 p-3 border border-yellow-500 rounded"
//         >
//           <option value="yes">Yes, I'll be there!</option>
//           <option value="no">Sorry, can't attend</option>
//         </select>

//         <textarea
//           name="message"
//           placeholder="Message (optional)"
//           value={formData.message}
//           onChange={handleChange}
//           className="w-full mb-4 p-3 border border-yellow-500 rounded"
//         />

//         <button
//           type="submit"
//           disabled={loading}
//           className="w-full py-3 bg-red-800 text-yellow-400 rounded"
//         >
//           {loading ? "Sending..." : "Submit RSVP"}
//         </button>
//       </form>
//     </div>
//   );
// }

//------------------------------------------------------------------------
//------------------------------------------------------------------------

// import React, { useState } from "react";
// import emailjs from "emailjs-com";

// export default function RSVP() {
//   const [formData, setFormData] = useState({
//     name: "",
//     phone: "",
//     guests: "1",
//     attend: "yes",
//     message: "",
//   });

//   const [loading, setLoading] = useState(false);
//   const [success, setSuccess] = useState(false);

//   const handleChange = (e) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     setLoading(true);

//     emailjs
//       .send(
//         "service_kkeerpp",
//         "template_n5faqqs",
//         {
//           name: formData.name,
//           phone: formData.phone,
//           guests: formData.guests,
//           attend: formData.attend,
//           message: formData.message || "No message",
//         },
//         "5CE0Rdx5PIf4FPc_a"
//       )
//       .then(() => {
//         setSuccess(true);

//         // WhatsApp
//         const msg = `Wedding RSVP:
// Name: ${formData.name}
// Phone: ${formData.phone}
// Guests: ${formData.guests}
// Attend: ${formData.attend}
// Message: ${formData.message}`;

//         window.open(
//           `https://wa.me/917808709989?text=${encodeURIComponent(msg)}`,
//           "_blank"
//         );

//         setFormData({
//           name: "",
//           phone: "",
//           guests: "1",
//           attend: "yes",
//           message: "",
//         });
//       })
//       .catch(() => {
//         alert("❌ Failed to send RSVP");
//       })
//       .finally(() => setLoading(false));
//   };

//   return (
//     <div className="min-h-screen flex items-center justify-center bg-[#efe3d3] px-4 relative overflow-hidden">

//       {/* 🎉 CONFETTI */}
//       {success && (
//         <div className="absolute inset-0 pointer-events-none">
//           {[...Array(40)].map((_, i) => (
//             <span
//               key={i}
//               className="confetti"
//               style={{
//                 left: Math.random() * 100 + "%",
//                 animationDelay: Math.random() * 2 + "s",
//               }}
//             />
//           ))}
//         </div>
//       )}

//       {/* FORM */}
//       <form
//         onSubmit={handleSubmit}
//         className="bg-[#f8f6f3] p-8 sm:p-10 rounded-2xl border border-yellow-500 shadow-lg w-full max-w-2xl"
//       >
//         {/* Heading */}
//         <h2 className="text-4xl text-center text-red-800 font-serif mb-2">
//           RSVP
//         </h2>
//         <p className="text-center text-gray-600 mb-8">
//           Please confirm your attendance
//         </p>

//         {/* Full Name */}
//         <div className="mb-5">
//           <label className="block mb-2 text-sm font-medium">
//             Full Name *
//           </label>
//           <input
//             type="text"
//             name="name"
//             required
//             value={formData.name}
//             onChange={handleChange}
//             className="w-full p-3 rounded-xl border border-yellow-500 bg-white focus:outline-none focus:ring-2 focus:ring-red-300"
//           />
//         </div>

//         {/* Phone */}
//         <div className="mb-5">
//           <label className="block mb-2 text-sm font-medium">
//             Phone Number *
//           </label>
//           <input
//             type="tel"
//             name="phone"
//             required
//             value={formData.phone}
//             onChange={handleChange}
//             className="w-full p-3 rounded-xl border border-yellow-500 bg-white focus:outline-none focus:ring-2 focus:ring-red-300"
//           />
//         </div>

//         {/* Guests + Attend */}
//         <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-5">
//           <div>
//             <label className="block mb-2 text-sm font-medium">
//               Number of Guests *
//             </label>
//             <select
//               name="guests"
//               value={formData.guests}
//               onChange={handleChange}
//               className="w-full p-3 rounded-xl border border-yellow-500 bg-white"
//             >
//               {[1, 2, 3, 4, 5].map((n) => (
//                 <option key={n}>{n}</option>
//               ))}
//             </select>
//           </div>

//           <div>
//             <label className="block mb-2 text-sm font-medium">
//               Will Attend? *
//             </label>
//             <select
//               name="attend"
//               value={formData.attend}
//               onChange={handleChange}
//               className="w-full p-3 rounded-xl border border-yellow-500 bg-white"
//             >
//               <option value="yes">Yes, I'll be there!</option>
//               <option value="no">Sorry, can't attend</option>
//             </select>
//           </div>
//         </div>

//         {/* Message */}
//         <div className="mb-6">
//           <label className="block mb-2 text-sm font-medium">
//             Message (Optional)
//           </label>
//           <textarea
//             name="message"
//             rows="4"
//             value={formData.message}
//             onChange={handleChange}
//             placeholder="Share your thoughts..."
//             className="w-full p-3 rounded-xl border border-yellow-500 bg-white"
//           />
//         </div>

//         {/* Button */}
//         <button
//           type="submit"
//           disabled={loading}
//           className="w-full py-3 rounded-xl bg-gradient-to-r from-red-800 to-red-600 text-yellow-300 font-semibold shadow-md hover:scale-[1.02] transition"
//         >
//           {loading ? "Sending..." : "Submit RSVP"}
//         </button>
//       </form>

//       {/* 🎉 CONFETTI STYLE */}
//       <style>{`
//         .confetti {
//           position: absolute;
//           top: -10px;
//           width: 8px;
//           height: 8px;
//           background: red;
//           animation: fall 3s linear infinite;
//         }

//         .confetti:nth-child(2n) { background: gold; }
//         .confetti:nth-child(3n) { background: pink; }

//         @keyframes fall {
//           0% { transform: translateY(0) rotate(0); }
//           100% { transform: translateY(100vh) rotate(360deg); }
//         }
//       `}</style>
//     </div>
//   );
// }

import React, { useState } from "react";
import emailjs from "emailjs-com";

export default function RSVPSection() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    guests: "1",
    attend: "yes",
    message: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    // 📧 EMAIL SEND
    emailjs
      .send(
        "service_kkeerpp",
        "template_n5faqqs",
        {
          name: formData.name,
          phone: formData.phone,
          guests: formData.guests,
          attend: formData.attend,
          message: formData.message,
        },
        "5CE0Rdx5PIf4FPc_a"
      )
      .then(() => {
        alert("✅ RSVP Sent Successfully on email!  Also Send on What's App...");

        // 📱 WHATSAPP MESSAGE
        const whatsappMessage = `
Wedding RSVP:
Name: ${formData.name}
Phone: ${formData.phone}
Guests: ${formData.guests}
Attend: ${formData.attend}
Message: ${formData.message}
        `;

        const whatsappURL = `https://wa.me/917808709989?text=${encodeURIComponent(
          whatsappMessage
        )}`;

        window.open(whatsappURL, "_blank");

        // Reset form
        setFormData({
          name: "",
          phone: "",
          guests: "1",
          attend: "yes",
          message: "",
        });
      })
      .catch((error) => {
        console.error(error);
        alert("❌ Failed to send RSVP. Check EmailJS setup.");
      })
      .finally(() => setLoading(false));
  };

  return (
    <div id="rsvp" className="min-h-screen bg-gradient-to-b from-pink-400 via-pink-100 flex flex-col items-center justify-center px-4 py-16">

      {/* Header */}
      <h1 className="text-4xl md:text-5xl text-pink-800 font-serif mb-2">
        RSVP
      </h1>
      <p className="text-gray-600 mb-10">
        Please confirm your attendance
      </p>

      {/* Form */}
      <form
        onSubmit={handleSubmit}
        className="w-full max-w-3xl bg-gray-100 rounded-2xl border border-pink-500 shadow-lg p-6 md:p-10"
      >

        {/* Name */}
        <div className="mb-5">
          <label className="block mb-2">Full Name *</label>
          <input
            type="text"
            name="name"
            required
            value={formData.name}
            onChange={handleChange}
            className="w-full p-3 border border-pink-500 rounded-xl"
          />
        </div>

        {/* Phone */}
        <div className="mb-5">
          <label className="block mb-2">Phone Number *</label>
          <input
            type="tel"
            name="phone"
            required
            value={formData.phone}
            onChange={handleChange}
            className="w-full p-3 border border-pink-500 rounded-xl"
          />
        </div>

        {/* Guests + Attend */}
        <div className="grid md:grid-cols-2 gap-4 mb-5">

          <div>
            <label className="block mb-2">Number of Guests *</label>
            <select
              name="guests"
              value={formData.guests}
              onChange={handleChange}
              className="w-full p-3 border border-pink-500 rounded-xl"
            >
              {[1,2,3,4,5].map(n => (
                <option key={n}>{n}</option>
              ))}
            </select>
          </div>

          <div>
            <label className="block mb-2">Will Attend? *</label>
            <select
              name="attend"
              value={formData.attend}
              onChange={handleChange}
              className="w-full p-3 border border-pink-500 rounded-xl"
            >
              <option value="yes">Yes, I'll be there!</option>
              <option value="no">Sorry, can't attend</option>
            </select>
          </div>
        </div>

        {/* Message */}
        <div className="mb-6">
          <label className="block mb-2">Message (Optional)</label>
          <textarea
            name="message"
            rows="4"
            value={formData.message}
            onChange={handleChange}
            placeholder="Share your thoughts..."
            className="w-full p-3 border border-pink-500 rounded-xl"
          />
        </div>

        {/* Submit */}
        <button
          type="submit"
          disabled={loading}
          className="w-full py-3 bg-pink-800 text-white rounded-xl hover:bg-pink-700 transition"
        >
          {loading ? "Sending..." : "Submit RSVP"}
        </button>
      </form>
    </div>
  );
}