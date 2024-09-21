export default function Home() {
  
  return (
    <div className="w-full max-w-screen-md mx-auto px-4 py-8 flex flex-col items-center">
      <div className="max-w-screen-md w-full bg-zinc-800 overflow-x-auto">
        <h3 className="fixed left-0 sm:relative w-full pt-4 pb-2 rounded-t font-extrabold text-4xl text-center text-zinc-200">Table Display</h3>
        <table className="table-auto border-separate mt-16 sm:mt-0 p-4 rounded-b text-zinc-200">
          <thead>
            <tr className="*:bg-red-900 *:px-4 *:py-2">
              <th>Song</th>
              <th>Artist</th>
              <th>Year</th>
            </tr>
          </thead>
          <tbody>
            <tr className="*:min-w-36 *:px-4 *:py-2 *:bg-zinc-700">
              <td>The Sliding Mr. Bones (Next Stop, Pottersville)</td>
              <td>Malcolm Lockyer</td>
              <td className="text-center">1961</td>
            </tr>
            <tr className="*:min-w-36 *:px-4 *:py-2 *:bg-zinc-700">
              <td>Witchy Woman</td>
              <td>The Eagles</td>
              <td className="text-center">1972</td>
            </tr>
            <tr className="*:min-w-36 *:px-4 *:py-2 *:bg-zinc-700">
              <td>Shining Star</td>
              <td>Earth, Wind, and Fire</td>
              <td className="text-center">1975</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  )
}