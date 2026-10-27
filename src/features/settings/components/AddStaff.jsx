import { ImagePlus, X } from 'lucide-react'
import { useRef, useState } from 'react'

const initialForm = {
  name: '',
  email: '',
  active: true,
  role: '',
  image: '',
}

const AddStaff = ({ children, onAdd }) => {
  const [isOpen, setIsOpen] = useState(false)
  const [addStaff, setAddStaff] = useState(initialForm)
  const fileInputRef = useRef(null)

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target
    setAddStaff((prevState) => ({
      ...prevState,
      [name]: type === 'checkbox' ? checked : value,
    }))
  }

  const handleImageChange = (e) => {
    const file = e.target.files?.[0]
    if (!file) return

    const reader = new FileReader()
    reader.onload = () => {
      setAddStaff((prevState) => ({
        ...prevState,
        image: reader.result,
      }))
    }
    reader.readAsDataURL(file)
  }

  const closeModal = () => {
    setIsOpen(false)
    setAddStaff(initialForm)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    onAdd({
      ...addStaff,
      id: `s-${Date.now()}`,
      lastLogin: 'Just now',
    })
    closeModal()
  }

  return (
    <>
      <span
        className="inline-flex cursor-pointer"
        onClick={() => setIsOpen(true)}
      >
        {children}
      </span>
      {isOpen ? (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-ink/40 px-4 backdrop-blur-[2px]"
          onMouseDown={(e) => {
            if (e.target === e.currentTarget) closeModal()
          }}
        >
          <form
            onSubmit={handleSubmit}
            className="w-full max-w-lg overflow-hidden rounded-2xl bg-cream-50 shadow-2xl"
          >
            <div className="flex items-start justify-between border-b border-line px-6 py-5">
              <div>
                <p className="font-display text-xl text-ink">Add staff member</p>
                <p className="mt-1 text-xs text-ink-faint">
                  Add their details and profile image.
                </p>
              </div>
              <button
                type="button"
                onClick={closeModal}
                className="rounded-full p-1.5 text-ink-faint transition hover:bg-cream-200 hover:text-ink"
                aria-label="Close dialog"
              >
                <X className="h-5 w-5" />
              </button>
            </div>

            <div className="space-y-4 px-6 py-5">
              <button
                type="button"
                onClick={() => fileInputRef.current?.click()}
                className="group flex w-full items-center gap-4 rounded-xl border border-dashed border-brand-line bg-brand-soft/40 p-4 text-left transition hover:border-brand hover:bg-brand-soft"
              >
                {addStaff.image ? (
                  <img
                    src={addStaff.image}
                    alt="Selected staff profile"
                    className="h-16 w-16 shrink-0 rounded-xl object-cover"
                  />
                ) : (
                  <span className="flex h-16 w-16 shrink-0 items-center justify-center rounded-xl bg-cream-200 text-brand">
                    <ImagePlus className="h-7 w-7" strokeWidth={1.6} />
                  </span>
                )}
                <span>
                  <span className="block text-sm font-medium text-ink">
                    {addStaff.image ? 'Change profile image' : 'Add profile image'}
                  </span>
                  <span className="mt-1 block text-xs text-ink-faint">
                    JPG, PNG or WEBP up to 5 MB
                  </span>
                </span>
              </button>
              <input
                ref={fileInputRef}
                type="file"
                accept="image/png,image/jpeg,image/webp"
                onChange={handleImageChange}
                className="hidden"
              />

              <div className="grid gap-3 sm:grid-cols-2">
                <input
                  type="text"
                  name="name"
                  placeholder="Full name"
                  value={addStaff.name}
                  onChange={handleChange}
                  required
                  className="h-11 w-full rounded-lg border border-line bg-white px-3 text-sm text-ink outline-none transition placeholder:text-ink-faint focus:border-brand focus:ring-2 focus:ring-brand-soft"
                />
                <input
                  type="email"
                  name="email"
                  placeholder="Email"
                  value={addStaff.email}
                  onChange={handleChange}
                  required
                  className="h-11 w-full rounded-lg border border-line bg-white px-3 text-sm text-ink outline-none transition placeholder:text-ink-faint focus:border-brand focus:ring-2 focus:ring-brand-soft"
                />
                <input
                  type="text"
                  name="role"
                  placeholder="Role"
                  value={addStaff.role}
                  onChange={handleChange}
                  required
                  className="h-11 w-full rounded-lg border border-line bg-white px-3 text-sm text-ink outline-none transition placeholder:text-ink-faint focus:border-brand focus:ring-2 focus:ring-brand-soft"
                />
              </div>
              <label className="flex cursor-pointer items-center gap-2 text-sm text-ink-soft">
                <input
                  type="checkbox"
                  name="active"
                  checked={addStaff.active}
                  onChange={handleChange}
                  className="h-4 w-4 accent-brand"
                />
                Active staff member
              </label>
            </div>
            <div className="flex justify-end gap-2 border-t border-line bg-white px-6 py-4">
              <button
                type="button"
                onClick={closeModal}
                className="rounded-lg px-4 py-2.5 text-sm font-medium text-ink-soft transition hover:bg-cream-200"
              >
                Cancel
              </button>
              <button
                type="submit"
                className="rounded-lg bg-brand px-4 py-2.5 text-sm font-medium text-cream-50 transition hover:bg-brand-strong"
              >
                Add staff
              </button>
            </div>
          </form>
        </div>
      ) : null}
    </>
  )
}

export default AddStaff