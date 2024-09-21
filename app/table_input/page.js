export default function TableInput() {
  return (
    <div className="w-full max-w-screen-md mx-auto px-4 py-8 flex flex-col items-center">
      <div className="max-w-md w-full text-zinc-200 bg-zinc-800 overflow-x-auto">
        <h3 className="fixed left-0 sm:relative w-full pt-4 pb-2 rounded-t font-extrabold text-4xl text-center">Table Input</h3>
        <form className="max-w-md w-full px-8 py-6 rounded bg-zinc-800">
          <div className="mb-3 flex flex-col">
            <label className="ml-1 mb-1 font-bold" htmlFor="category">Category:</label>
            <input className="h-10 p-2 rounded font-medium bg-zinc-600 outline-none border-4 border-zinc-500 focus:border-dashed" name="category" type="text" />
          </div>
          <div className="mb-3 flex flex-col">
            <label className="ml-1 mb-1 font-bold" htmlFor="amount">Amount:</label>
            <input className="h-10 p-2 rounded font-medium bg-zinc-600 outline-none border-4 border-zinc-500 focus:border-dashed" name="amount" type="number" />
          </div>
          <div className="mb-6 flex flex-col">
            <label className="ml-1 mb-1 font-bold" htmlFor="vendor">Vendor:</label>
            <input className="h-10 p-2 rounded font-medium bg-zinc-600 outline-none border-4 border-zinc-500 focus:border-dashed" name="vendor" type="text" />
          </div>
          <div className="flex justify-between">
            <button type="submit" className="w-28 py-2 font-bold rounded bg-red-500/80 shadow-red-500 transition-all hover:bg-red-500 hover:shadow-sm hover:shadow-red-500">Cancel</button>
            <button type="submit" className="w-28 py-2 font-bold rounded bg-blue-500/80 shadow-blue-500 transition-all hover:bg-blue-500 hover:shadow-sm hover:shadow-blue-500">Submit</button>
          </div>
        </form>
      </div>
    </div>
  )
}