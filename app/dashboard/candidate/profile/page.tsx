import {
  FiEdit,
  FiMapPin,
  FiPlus,
  FiVideo,
  FiAward,
} from "react-icons/fi";

/* =========================================================
    🔹 REUSABLE SECTION CARD COMPONENT
   ========================================================= */
function SectionCard({
  title,
  count,
  action,
  prompt,
  rightSlot,
  children,
  bodyClassName,
  centerContent = true,
}: {
  title: string;
  count?: number;
  action?: string;
  prompt?: string;
  rightSlot?: React.ReactNode;
  children?: React.ReactNode;
  bodyClassName?: string;
  centerContent?: boolean;
}) {
  return (
    <section className="rounded-xl bg-white shadow-sm">
      
      {/* 🔸 HEADER (title + count + action button) */}
      <div className="flex items-center justify-between px-5 py-4">
        
        {/* LEFT: title + optional count badge */}
        <div className="flex items-center gap-2">
          <h3 className="text-base font-semibold leading-none text-[#064f52]">
            {title}
          </h3>

          {/* Count badge (only shows if count exists) */}
          {typeof count === "number" && (
            <span className="rounded-md bg-[#deebeb] px-2 py-1 text-sm font-semibold leading-none text-[#0a8385]">
              {count}
            </span>
          )}
        </div>

        {/* RIGHT: action button (Add / Edit) */}
        {action && (
          <button
            type="button"
            className="flex items-center gap-2 text-sm font-semibold text-[#0a8385] transition hover:opacity-80 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0a8385]/40"
          >
            <FiPlus size={18} /> {action}
          </button>
        )}
      </div>

      {/* 🔸 BODY (empty state prompt + optional slot UI) */}
      <div className={`border-t border-[#dadada] px-5 py-4 ${bodyClassName ?? ""}`}>
        {children ? (
          children
        ) : (
          <div
            className={`flex items-center gap-4 ${
              centerContent ? "justify-center" : "justify-start"
            }`}
          >
            {/* Main prompt (empty state text) */}
            {prompt && (
              <button
                type="button"
                className="text-sm font-semibold text-[#0a8385] underline underline-offset-2 transition hover:opacity-80 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0a8385]/40"
              >
                {prompt}
              </button>
            )}

            {/* Optional extra UI (e.g. + button) */}
            {rightSlot}
          </div>
        )}
      </div>
    </section>
  );
}

/* =========================================================
    🔹 PROFILE PAGE
   ========================================================= */
export default function ProfilePage() {
  return (
    <div className="space-y-6 rounded-2xl bg-[#f7f7f7] p-4 md:p-6 [&_button]:cursor-pointer">

      {/* =====================================================
          🔹 HERO SECTION (Top Profile Card)
         ===================================================== */}
      <div className="overflow-hidden rounded-xl bg-white shadow-sm">
        
        {/* 🔸 Banner (top background strip) */}
        <div className="relative h-[150px] bg-[#d2e1e3] p-5">
          
          {/* Edit All button (top-right) */}
          <button
            type="button"
            className="absolute right-5 top-5 flex items-center gap-2 text-xs font-semibold text-[#07888a] transition hover:opacity-80 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#07888a]/40"
          >
            <FiEdit size={16} /> Edit All
          </button>
        </div>

        {/* 🔸 Profile Content (avatar + info + actions) */}
        <div className="relative z-10 flex flex-col gap-5 px-5 pb-6 pt-4 lg:flex-row lg:items-end">

          {/* Avatar (empty state placeholder) */}
          <button
            type="button"
            className="-mt-14 flex h-[128px] w-[128px] shrink-0 flex-col items-center justify-center gap-2 rounded-xl border-2 border-dashed border-[#0a8a8c] bg-[#eaf4f4] text-[#0a8a8c] transition hover:bg-[#def0f0] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0a8a8c]/40"
          >
            <FiPlus size={30} />
            <span className="text-sm font-semibold">Add photo</span>
          </button>

          {/* 🔸 User Info (name, title, location) */}
          <div className="min-w-0 flex-1">

            {/* Name + verification badge */}
            <div className="flex flex-wrap items-center gap-3">
              <h1 className="text-2xl font-semibold leading-tight text-[#087f82]">
                Olanrewaju Mercy
              </h1>

              {/* Verification CTA */}
              <button
                type="button"
                className="inline-flex items-center gap-1 rounded-md bg-[#fff1ea] px-2 py-1 text-xs font-semibold text-[#f67f45] transition hover:bg-[#ffe9dd] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#f67f45]/40"
              >
                Get Verified <FiAward size={14} />
              </button>
            </div>

            {/* Job Title */}
            <p className="mt-1 text-base leading-tight text-[#666]">
              Product Designer
            </p>

            {/* Location (empty state) */}
            <button
              type="button"
              className="mt-1 inline-flex items-center gap-2 rounded-lg bg-[#efefef] px-3 py-1.5 text-[#969696] transition hover:bg-[#e9e9e9] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0a8a8c]/30"
            >
              <FiMapPin size={14} className="text-[#0a8a8c]" />
              <span className="text-xs">Add your location</span>
            </button>
          </div>

          {/* 🔸 Right Side Actions */}
          <div className="flex flex-wrap items-center gap-2 lg:justify-end lg:self-center">

            {/* Work mode chips */}
            <div className="flex items-center gap-2 rounded-lg bg-[#efefef] p-1.5">
              {["Fully remote", "Hybrid", "On-site"].map((mode) => (
                <button
                  type="button"
                  key={mode}
                  className="rounded-md bg-[#f7f7f7] px-3 py-1 text-xs text-[#666] transition hover:bg-[#ececec] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0a8a8c]/30"
                >
                  {mode}
                </button>
              ))}
            </div>

            {/* Edit Profile button */}
            <button
              type="button"
              className="flex items-center gap-2 rounded-lg bg-[#0a8a8c] px-4 py-2 text-sm font-semibold text-white transition hover:bg-[#087679] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0a8a8c]/40"
            >
              <FiEdit size={16} /> Edit Profile
            </button>
          </div>
        </div>
      </div>

      {/* =====================================================
          🔹 PROFILE GRID (Main Content Sections)
         ===================================================== */}
      <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">

        {/* 🔸 LEFT COLUMN (Personal Info Sections) */}
        <div className="space-y-6">

          {/* Portfolios */}
          <SectionCard
            title="Portfolios"
            count={0}
            prompt="Add your portfolio link"
            rightSlot={
                <button
                  type="button"
                  className="rounded-md border border-[#9fd3d4] bg-[#ecf7f7] px-3 py-1 text-sm font-semibold text-[#0a8a8c] transition hover:bg-[#dff1f1] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0a8a8c]/30"
                >
                +
              </button>
            }
          />

          {/* Skills */}
          <SectionCard
            title="Skills"
            count={0}
            prompt="Add a skill"
            rightSlot={
                <button
                  type="button"
                  className="rounded-md border border-[#9fd3d4] bg-[#ecf7f7] px-3 py-1 text-sm font-semibold text-[#0a8a8c] transition hover:bg-[#dff1f1] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0a8a8c]/30"
                >
                +
              </button>
            }
          />

          {/* Intro Video */}
          <SectionCard title="Introductory Video" bodyClassName="p-4">
            <div>
              <div className="flex h-[150px] items-center justify-center rounded-md bg-[#efefef]">
                <button
                  type="button"
                  className="flex items-center gap-2 text-sm font-medium text-[#0a8385] underline underline-offset-2 transition hover:opacity-80 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0a8a8c]/30"
                >
                  Upload a Video <FiVideo size={18} />
                </button>
              </div>
            </div>
          </SectionCard>

          {/* Bio */}
          <SectionCard title="Bio" centerContent={false}>
            <div>
              <button
                type="button"
                className="text-sm font-semibold text-[#0a8385] underline underline-offset-2 transition hover:opacity-80 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0a8a8c]/30"
              >
                Add a short bio
              </button>
            </div>
          </SectionCard>
        </div>

        {/* 🔸 RIGHT COLUMN (Professional Sections) */}
        <div className="space-y-6 lg:col-span-2">

          <SectionCard
            title="Work Experience"
            action="Add Experience"
            prompt="Add your work experience"
            centerContent={false}
          />

          <SectionCard
            title="Education"
            action="Add"
            prompt="Add your Education"
            centerContent={false}
          />

          <SectionCard
            title="Certification"
            action="Edit"
            prompt="Add your Certification"
            centerContent={false}
          />
        </div>
      </div>
    </div>
  );
}