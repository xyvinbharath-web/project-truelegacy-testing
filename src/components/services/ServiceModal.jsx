import { useEffect, useState } from "react";
import { createEnquiry } from "../../api/enquiryApi";

const ServiceModal = ({ isOpen, onClose, serviceTitle, fields = [] }) => {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "unset";
    return () => (document.body.style.overflow = "unset");
  }, [isOpen]);

  if (!isOpen) return null;

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      setLoading(true);

      const payload = {
        name: e.target.name.value,
        email: e.target.email.value,
        phone: e.target.phone.value,
        message: e.target.message.value,
        source: serviceTitle,
        type: "service",
      };

      await createEnquiry(payload);
      e.target.reset();
      onClose();
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="fixed inset-0 z-[70] flex items-center justify-center px-4 service-modal-root">
      <div
        className="absolute inset-0 bg-black/50 backdrop-blur-sm service-modal-backdrop"
        onClick={onClose}
      />

      <div className="relative w-full max-w-[513px] bg-white rounded-[6px] shadow-[0_30px_80px_rgba(0,0,0,0.35)] overflow-hidden service-modal">
        <div className="px-8 pt-8 pb-4">
          <h2 className="font-[Urania] font-bold text-[26px] text-[#132F2C]">
            Request : {serviceTitle}
          </h2>
          <p className="mt-1 font-[Urania] text-[16px] text-[#6B6B6B]">
            Fill out the form below and we&apos;ll get back to you as soon as possible.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="px-8 pb-8 space-y-5">
          {fields.map((field) => (
            <div key={field.name}>
              <label className="block mb-1 font-[Urania] text-[14px] text-[#132F2C]">
                {field.label}
                {field.required && <span className="text-red-500 ml-1">*</span>}
              </label>

              {field.type === "textarea" ? (
                <textarea
                  name={field.name}
                  rows={field.rows || 3}
                  required={field.required}
                  placeholder={field.placeholder}
                  className="w-full rounded-[10px] bg-[#F7F9F8] px-4 py-3 text-[14px] font-[Urania] text-[#132F2C] outline-none focus:ring-2 focus:ring-[#132F2C]/30 resize-none"
                />
              ) : (
                <input
                  name={field.name}
                  type={field.type || "text"}
                  required={field.required}
                  placeholder={field.placeholder}
                  className="w-full rounded-[10px] bg-[#F7F9F8] px-4 py-3 text-[14px] font-[Urania] text-[#132F2C] outline-none focus:ring-2 focus:ring-[#132F2C]/30"
                />
              )}
            </div>
          ))}

          <div className="flex gap-3 pt-6 justify-end">
            <button
              type="button"
              onClick={onClose}
              disabled={loading}
              className="rounded-[50px] border border-[#132F2C] px-6 py-2 font-[Urania] text-[14px] text-[#132F2C] hover:bg-[#F2F6F4] transition"
            >
              Cancel
            </button>

            <button
              type="submit"
              disabled={loading}
              className="rounded-[50px] bg-[#132F2C] px-6 py-2 font-[Urania] text-[14px] font-bold text-white hover:bg-[#0D241E] transition disabled:opacity-50"
            >
              {loading ? "Submitting..." : "Submit Request"}
            </button>
          </div>
        </form>

        <button
          onClick={onClose}
          className="absolute top-6 right-6 text-[#6B6B6B] hover:text-[#132F2C]"
        >
          ✕
        </button>
      </div>
    </div>
  );
};

export default ServiceModal;
