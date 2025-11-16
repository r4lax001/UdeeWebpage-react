import { useState } from "react";
import { Link } from "react-router-dom";
import PreviewCard from "../../components/PreviewCard";
import Navbar from "../../components/inappLayout/Navbar";

export default function PropertyOwnerInfo() {
  const [announceRole, setAnnounceRole] = useState("เจ้าของทรัพย์");
  const [ownershipType, setOwnershipType] = useState("บุคคลธรรมดา");

  const [ownerPersonal, setOwnerPersonal] = useState({
    docOwner: "",
    roomNumber: "",
    houseNumber: "",
    phone: "",
    email: "",
    documentFile: null,
  });

  const [ownerCompany, setOwnerCompany] = useState({
    company: "",
    contactName: "",
    phone: "",
    email: "",
    docOwner: "",
    roomNumber: "",
    houseNumber: "",
    ownerPhone: "",
    contractDate: "",
    documentFile: null,
  });

  const [agentData, setAgentData] = useState({
    contactName: "",
    phone: "",
    email: "",
    docOwner: "",
    roomNumber: "",
    houseNumber: "",
    ownerPhone: "",
    contractDate: "",
    documentFile: null,
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("📄 บันทึกข้อมูลเรียบร้อย!");
  };

  return (
    <div className="bg-gray-100 min-h-screen text-gray-800 font-prompt">
      <Navbar />

      <main className="max-w-7xl mx-auto py-10 px-6">
        {/* breadcrumb */}
        <div className="text-sm text-gray-500 mb-8">
          หน้าหลัก &gt; ลงประกาศ &gt; เจ้าของประกาศ
        </div>

        <div className="flex flex-col lg:flex-row gap-8">
          {/* FORM */}
          <section className="flex-1 bg-white rounded-2xl shadow-md p-8 border border-gray-100">
            <div className="flex justify-center items-center border-b border-gray-200 mb-8 gap-32">
              <p className="text-gray-400 font-medium">ข้อมูลทรัพย์</p>
              <p className="text-accentPurple font-medium border-b-2 border-accentPurple pb-2">
                เจ้าของประกาศ
              </p>
            </div>

            <h2 className="text-lg font-medium mb-6 text-gray-800 text-center">
              ข้อมูลทรัพย์ผู้ลงประกาศ
            </h2>

            {/* --- เลือกบทบาท --- */}
            <div className="flex justify-center gap-6 mb-4">
              {["เจ้าของทรัพย์", "นายหน้า ตัวแทน"].map((role) => (
                <button
                  key={role}
                  type="button"
                  className={`px-5 py-2.5 rounded-full text-sm font-medium border transition-all duration-200 min-w-[150px] ${
                    announceRole === role
                      ? "bg-[#976FC8] text-white border-[#976FC8]  shadow-md"
                      : "bg-white text-gray-600 border-gray-300 hover:bg-gray-100"
                  }`}
                  onClick={() => setAnnounceRole(role)}
                >
                  {role}
                </button>
              ))}
            </div>

            <p className="text-xs text-gray-500 mb-8 text-center">
              {announceRole === "เจ้าของทรัพย์"
                ? "แบบฟอร์มนี้สำหรับเจ้าของทรัพย์ รับส่วนแบ่งค่าขาย 50%"
                : "แบบฟอร์มนี้สำหรับนายหน้าหรือตัวแทน ต้องระบุข้อมูลเจ้าของทรัพย์ให้ครบ"}
            </p>

            <form onSubmit={handleSubmit} className="flex flex-col gap-5">
              {/* ========== CASE 1: เจ้าของทรัพย์ ========== */}
              {announceRole === "เจ้าของทรัพย์" ? (
                <>
                  {/* ถือครองในนาม */}
                  <h2 className="text-lg  font-medium mb-1 text-gray-800 text-center">
                    ถือครองในนาม
                  </h2>

                  <div className="flex justify-center gap-6 mb-4">
                    {["บุคคลธรรมดา", "นิติบุคคล"].map((t) => (
                      <button
                        key={t}
                        type="button"
                        className={`px-5 py-2.5 rounded-full text-sm font-medium border transition-all duration-200 min-w-[150px] ${
                          ownershipType === t
                            ? "bg-[#976FC8] text-white border-[#976FC8] shadow-md"
                            : "bg-white text-gray-600 border-gray-300 hover:bg-gray-100"
                        }`}
                        onClick={() => setOwnershipType(t)}
                      >
                        {t}
                      </button>
                    ))}
                  </div>

                  {/* บุคคลธรรมดา */}
                  {ownershipType === "บุคคลธรรมดา" ? (
                    <>
                      <InputText
                        label="ชื่อเจ้าของตามเอกสารสิทธิ์*"
                        placeholder="เช่น นายสมชาย ใจดี"
                        value={ownerPersonal.docOwner}
                        onChange={(e) =>
                          setOwnerPersonal({
                            ...ownerPersonal,
                            docOwner: e.target.value,
                          })
                        }
                      />

                      <div className="grid grid-cols-2 gap-4">
                        <InputText
                          label="เลขที่ห้อง*"
                          placeholder="105/1"
                          value={ownerPersonal.roomNumber}
                          onChange={(e) =>
                            setOwnerPersonal({
                              ...ownerPersonal,
                              roomNumber: e.target.value,
                            })
                          }
                        />
                        <InputText
                          label="บ้านเลขที่*"
                          placeholder="22/88"
                          value={ownerPersonal.houseNumber}
                          onChange={(e) =>
                            setOwnerPersonal({
                              ...ownerPersonal,
                              houseNumber: e.target.value,
                            })
                          }
                        />
                      </div>

                      <InputText
                        label="เบอร์ติดต่อ*"
                        placeholder="0891234567"
                        value={ownerPersonal.phone}
                        onChange={(e) =>
                          setOwnerPersonal({
                            ...ownerPersonal,
                            phone: e.target.value,
                          })
                        }
                      />

                      <InputText
                        label="Email*"
                        type="email"
                        placeholder="example@gmail.com"
                        value={ownerPersonal.email}
                        onChange={(e) =>
                          setOwnerPersonal({
                            ...ownerPersonal,
                            email: e.target.value,
                          })
                        }
                      />

                      <FileUpload
                      className="bg-black"
                        label="อัปโหลดเอกสาร*"
                        onChange={(e) =>
                          setOwnerPersonal({
                            ...ownerPersonal,
                            documentFile: e.target.files[0],
                          })
                        }
                      />
                    </>
                  ) : (
                    // นิติบุคคล
                    <>
                      <InputText
                        label="ชื่อบริษัท*"
                        placeholder="ชื่อบริษัท"
                        value={ownerCompany.company}
                        onChange={(e) =>
                          setOwnerCompany({
                            ...ownerCompany,
                            company: e.target.value,
                          })
                        }
                      />

                      <InputText
                        label="ชื่อผู้ติดต่อ*"
                        placeholder="ชื่อผู้ติดต่อ"
                        value={ownerCompany.contactName}
                        onChange={(e) =>
                          setOwnerCompany({
                            ...ownerCompany,
                            contactName: e.target.value,
                          })
                        }
                      />

                      <div className="grid grid-cols-2 gap-4">
                        <InputText
                          label="เบอร์ติดต่อ*"
                          placeholder="0891234567"
                          value={ownerCompany.phone}
                          onChange={(e) =>
                            setOwnerCompany({
                              ...ownerCompany,
                              phone: e.target.value,
                            })
                          }
                        />
                        <InputText
                          label="Email*"
                          type="email"
                          placeholder="example@gmail.com"
                          value={ownerCompany.email}
                          onChange={(e) =>
                            setOwnerCompany({
                              ...ownerCompany,
                              email: e.target.value,
                            })
                          }
                        />
                      </div>

                      <InputText
                        label="ชื่อเจ้าของตามเอกสารสิทธิ์*"
                        placeholder="นายสมชาย ใจดี"
                        value={ownerCompany.docOwner}
                        onChange={(e) =>
                          setOwnerCompany({
                            ...ownerCompany,
                            docOwner: e.target.value,
                          })
                        }
                      />

                      <div className="grid grid-cols-2 gap-4">
                        <InputText
                          label="เลขที่ห้อง*"
                          placeholder="105/1"
                          value={ownerCompany.roomNumber}
                          onChange={(e) =>
                            setOwnerCompany({
                              ...ownerCompany,
                              roomNumber: e.target.value,
                            })
                          }
                        />
                        <InputText
                          label="บ้านเลขที่*"
                          placeholder="22/88"
                          value={ownerCompany.houseNumber}
                          onChange={(e) =>
                            setOwnerCompany({
                              ...ownerCompany,
                              houseNumber: e.target.value,
                            })
                          }
                        />
                      </div>

                      <div className="grid grid-cols-2 gap-4">
                        <InputText
                          label="เบอร์ติดต่อเจ้าของทรัพย์*"
                          placeholder="0891234567"
                          value={ownerCompany.ownerPhone}
                          onChange={(e) =>
                            setOwnerCompany({
                              ...ownerCompany,
                              ownerPhone: e.target.value,
                            })
                          }
                        />
                        <InputText
                          label="วันสิ้นสุดสัญญาตัวแทน*"
                          type="date"
                          value={ownerCompany.contractDate}
                          onChange={(e) =>
                            setOwnerCompany({
                              ...ownerCompany,
                              contractDate: e.target.value,
                            })
                          }
                        />
                      </div>

                      <FileUpload
                        label="อัปโหลดเอกสาร*"
                        onChange={(e) =>
                          setOwnerCompany({
                            ...ownerCompany,
                            documentFile: e.target.files[0],
                          })
                        }
                      />
                    </>
                  )}
                </>
              ) : (
                /* นายหน้า / ตัวแทน */
                <>
                  <InputText
                    label="ชื่อผู้ลงประกาศ / ผู้ติดต่อ*"
                    placeholder="คุณอาร์ต ตัวแทนขาย"
                    value={agentData.contactName}
                    onChange={(e) =>
                      setAgentData({
                        ...agentData,
                        contactName: e.target.value,
                      })
                    }
                  />

                  <div className="grid grid-cols-2 gap-4">
                    <InputText
                      label="เบอร์ติดต่อ*"
                      placeholder="0891234567"
                      value={agentData.phone}
                      onChange={(e) =>
                        setAgentData({
                          ...agentData,
                          phone: e.target.value,
                        })
                      }
                    />
                    <InputText
                      label="Email*"
                      type="email"
                      placeholder="example@gmail.com"
                      value={agentData.email}
                      onChange={(e) =>
                        setAgentData({
                          ...agentData,
                          email: e.target.value,
                        })
                      }
                    />
                  </div>

                  <hr className="my-4 border-gray-200" />

                  <p className="text-sm font-semibold text-gray-700">
                    ข้อมูลเจ้าของตามเอกสารสิทธิ์
                  </p>

                  <InputText
                    label="ชื่อเจ้าของตามเอกสารสิทธิ์*"
                    placeholder="นายสมชาย ใจดี"
                    value={agentData.docOwner}
                    onChange={(e) =>
                      setAgentData({ ...agentData, docOwner: e.target.value })
                    }
                  />

                  <div className="grid grid-cols-2 gap-4">
                    <InputText
                      label="เลขที่ห้อง*"
                      placeholder="105/1"
                      value={agentData.roomNumber}
                      onChange={(e) =>
                        setAgentData({
                          ...agentData,
                          roomNumber: e.target.value,
                        })
                      }
                    />
                    <InputText
                      label="บ้านเลขที่*"
                      placeholder="22/88"
                      value={agentData.houseNumber}
                      onChange={(e) =>
                        setAgentData({
                          ...agentData,
                          houseNumber: e.target.value,
                        })
                      }
                    />
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <InputText
                      label="เบอร์ติดต่อเจ้าของทรัพย์*"
                      placeholder="0891234567"
                      value={agentData.ownerPhone}
                      onChange={(e) =>
                        setAgentData({
                          ...agentData,
                          ownerPhone: e.target.value,
                        })
                      }
                    />
                    <InputText
                      label="วันสิ้นสุดสัญญาตัวแทน*"
                      type="date"
                      value={agentData.contractDate}
                      onChange={(e) =>
                        setAgentData({
                          ...agentData,
                          contractDate: e.target.value,
                        })
                      }
                    />
                  </div>

                  <FileUpload
                    label="อัปโหลดเอกสารตัวแทน / มอบอำนาจ*"
                    onChange={(e) =>
                      setAgentData({
                        ...agentData,
                        documentFile: e.target.files[0],
                      })
                    }
                  />
                </>
              )}

              {/* ปุ่ม */}
              <div className="flex gap-4 mt-4">
                <button
                  type="submit"
                  className="flex-1 bg-[#976FC8] text-white py-3 rounded-lg text-sm font-medium hover:bg-mainPurple transition shadow-sm"
                >
                  บันทึกแล้วลงขาย
                </button>

                <Link to="/forsales/propertyinfo" className="flex-1">
                  <button
                    type="button"
                    className="w-full bg-gray-200 text-gray-700 py-3 rounded-lg text-sm font-medium hover:bg-gray-300 transition"
                  >
                    ย้อนกลับ
                  </button>
                </Link>
              </div>
            </form>
          </section>

          {/* PREVIEW */}
          <section className="flex-1 bg-white rounded-2xl shadow-md p-8 border border-gray-100 flex flex-col">
            <h3 className="text-center font-medium mb-6 text-gray-800">
              พรีวิวหน้าประกาศของคุณ
            </h3>
            <div className="flex-1 overflow-y-auto">
              <PreviewCard />
            </div>
          </section>
        </div>
      </main>
    </div>
  );
}

/* ===== Components ย่อย ===== */
function InputText({ label, type = "text", placeholder, value, onChange }) {
  return (
    <div className="flex flex-col gap-1">
      <label className="text-sm font-medium text-gray-700">{label}</label>
      <input
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        className="w-full bg-white border border-gray-300 rounded-lg p-2.5 text-sm focus:ring-2 focus:ring-mainPurple outline-none"
        required
      />
    </div>
  );
}

function FileUpload({ label, onChange }) {
  return (
    <div className="flex flex-col gap-1">
      <label className="text-sm font-medium text-gray-700">{label}</label>
      <input
        type="file"
        onChange={onChange}
        className="block w-full text-sm text-gray-500 
          file:mr-4 file:py-2.5 file:px-4 file:rounded-md 
          file:border-0 file:text-sm file:font-semibold 
          file:bg-accentPurple file:text-white hover:file:bg-mainPurple 
          bg-white cursor-pointer"
        required
      />
    </div>
  );
}
