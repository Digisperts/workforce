import { FiEdit } from "react-icons/fi";

export default function ProfilePage() {
  return (
    <div className="p-6 space-y-6 bg-[#f7f9f9] min-h-screen">
      
      {/* Header */}
      <div className="bg-[#dfeaea] rounded-2xl p-6 relative">
        <div className="absolute top-4 right-4 text-sm text-teal-700 flex items-center gap-1 cursor-pointer">
          <FiEdit size={16} /> Edit All
        </div>

        <div className="flex items-center gap-6 mt-10">
          <img
            src="/profile.jpg"
            alt="profile"
            className="w-24 h-24 rounded-xl object-cover"
          />

          <div>
            <h2 className="text-2xl font-semibold text-teal-800 flex items-center gap-2">
              Olanrewaju Mercy
              <span className="text-orange-500">✔</span>
            </h2>
            <p className="text-gray-500">Product Designer</p>

            <div className="text-sm text-gray-500 mt-1">
              Lagos Nigeria, 1:15pm
            </div>

            <div className="flex gap-2 mt-3">
              <span className="px-3 py-1 bg-orange-100 text-orange-600 rounded-md text-xs">
                Fully remote
              </span>
              <span className="px-3 py-1 bg-gray-200 text-gray-600 rounded-md text-xs">
                Hybrid
              </span>
              <span className="px-3 py-1 bg-gray-200 text-gray-600 rounded-md text-xs">
                On-site
              </span>
            </div>
          </div>

          <div className="ml-auto">
            <button className="bg-teal-700 text-white px-4 py-2 rounded-lg">
              Edit Profile
            </button>
          </div>
        </div>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        
        {/* LEFT SIDE */}
        <div className="space-y-6">
          
          {/* Portfolio */}
          <div className="bg-white rounded-xl p-4 shadow-sm">
            <h3 className="font-semibold mb-3">Portfolios</h3>
            <div className="flex gap-3">
              <div className="w-12 h-12 bg-blue-500 rounded-lg"></div>
              <div className="w-12 h-12 bg-pink-500 rounded-lg"></div>
              <div className="w-12 h-12 bg-red-500 rounded-lg"></div>
              <div className="w-12 h-12 bg-blue-700 rounded-lg"></div>
              <div className="w-12 h-12 bg-gray-200 rounded-lg flex items-center justify-center">
                +
              </div>
            </div>
          </div>

          {/* Skills */}
          <div className="bg-white rounded-xl p-4 shadow-sm">
            <div className="flex justify-between mb-3">
              <h3 className="font-semibold">Skills</h3>
              <span className="text-sm text-teal-600 cursor-pointer flex items-center gap-1">
                <FiEdit size={14} /> Edit
              </span>
            </div>

            <div className="flex flex-wrap gap-2">
              {[
                "Web Design",
                "App Design",
                "Interaction Design",
                "Prototype",
                "Micro Interactions",
                "User Research",
              ].map((skill) => (
                <span
                  key={skill}
                  className="px-3 py-1 text-sm bg-gray-100 rounded-md"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>

          {/* Bio */}
          <div className="bg-white rounded-xl p-4 shadow-sm">
            <div className="flex justify-between mb-3">
              <h3 className="font-semibold">Bio</h3>
              <span className="text-sm text-teal-600 flex items-center gap-1 cursor-pointer">
                <FiEdit size={14} /> Edit
              </span>
            </div>

            <p className="text-sm text-gray-600">
              As a Product Designer, I focus on creating human-centered digital
              products that drive positive change...
            </p>

            <div className="text-xs text-teal-600 mt-2">2000/5000</div>
          </div>
        </div>

        {/* RIGHT SIDE */}
        <div className="lg:col-span-2 space-y-6">
          
          {/* Work Experience */}
          <div className="bg-white rounded-xl p-5 shadow-sm">
            <div className="flex justify-between mb-4">
              <h3 className="font-semibold text-lg">
                Work Experience <span className="text-teal-600">2020–2025</span>
              </h3>
              <span className="text-sm text-teal-600 flex items-center gap-1 cursor-pointer">
                <FiEdit size={14} /> Edit All
              </span>
            </div>

            {/* Job */}
            <div className="mb-6">
              <h4 className="font-semibold">Digisperts LLC</h4>
              <p className="text-sm text-gray-500">
                Product Designer (Remote)
              </p>
              <p className="text-sm text-gray-600 mt-2">
                Work summary goes here...
              </p>
            </div>

            <div>
              <h4 className="font-semibold">Google</h4>
              <p className="text-sm text-gray-500">
                Product Designer (On Site)
              </p>
              <p className="text-sm text-gray-600 mt-2">
                Work summary goes here...
              </p>
            </div>
          </div>

          {/* Education */}
          <div className="bg-white rounded-xl p-5 shadow-sm">
            <div className="flex justify-between mb-4">
              <h3 className="font-semibold text-lg">Education</h3>
              <span className="text-sm text-teal-600 flex items-center gap-1 cursor-pointer">
                <FiEdit size={14} /> Edit
              </span>
            </div>

            <div>
              <h4 className="font-semibold">Lagos State University</h4>
              <p className="text-sm text-gray-500">
                Bachelor's Degree (Business Administration)
              </p>
              <span className="text-xs text-teal-600">2016–2020</span>
            </div>
          </div>

          {/* Certification */}
          <div className="bg-white rounded-xl p-5 shadow-sm">
            <div className="flex justify-between mb-4">
              <h3 className="font-semibold text-lg">Certification</h3>
              <span className="text-sm text-teal-600 flex items-center gap-1 cursor-pointer">
                <FiEdit size={14} /> Edit
              </span>
            </div>

            <div>
              <h4 className="font-semibold">Udemy</h4>
              <p className="text-sm text-gray-500">
                Advanced Product Design on Figma
              </p>
              <span className="text-xs text-teal-600">2 Months</span>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}