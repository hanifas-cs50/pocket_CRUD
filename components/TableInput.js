export default function TableInput() {
  return (
    <div className="absolute inset-0 w-full min-h-screen grid place-items-center text-white bg-black/50">
      <form className="max-w-md w-full px-8 py-6 rounded bg-zinc-800">
        <h3 className="mb-4 p-4 font-bold text-4xl text-center rounded bg-zinc-700">Input:</h3>
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
        <button type="submit" className="w-28 py-2 font-bold rounded bg-red-500/80 transition-colors hover:bg-red-500">Cancel</button>
          <button type="submit" className="w-28 py-2 font-bold rounded bg-blue-500/80 transition-colors hover:bg-blue-500">Submit</button>
        </div>
      </form>
    </div>
  )
}