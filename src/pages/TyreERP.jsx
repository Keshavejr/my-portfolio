export default function TyreERP() {
  return (
    <div className="min-h-screen bg-gray-100 p-10">

      <h1 className="text-4xl font-bold mb-6">
        Tyre Repair & Service ERP
      </h1>

      <p className="text-gray-700 mb-10 max-w-3xl">
        A full-stack ERP system developed for tyre repair and
        service businesses to manage inventory, bookings,
        staff operations, and customer appointments.
      </p>

      <div className="space-y-8">

        <img
          src="/erp-dashboard.png"
          alt="Dashboard"
          className="rounded-xl shadow-lg"
        />

        <img
          src="/erp-booking.png"
          alt="Booking"
          className="rounded-xl shadow-lg"
        />

        <img
          src="/erp-inventory.png"
          alt="Inventory"
          className="rounded-xl shadow-lg"
        />

        <img
          src="/erp-invoices.png"
          alt="Invoices"
          className="rounded-xl shadow-lg"
        />

      </div>

    </div>
  )
}