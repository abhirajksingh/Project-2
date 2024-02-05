import React,{useState, useEffect} from 'react'
import axios from "axios";
import ReactPaginate from 'react-paginate';

function Products() {
  const [products, setProducts] = useState([]);
  const [searchbyRegion, setSearchbyRegino] = useState('');
  const [searchByCountry, setSearchByCountry] = useState('');
  const [endYear, setEndYear] = useState('');
  const [topic, setTopic] = useState('');
  const [sector, setSector] = useState('');
  const [source, setSource] = useState('');
  const [currentPage, setCurrentPage] = useState(0);
  const itemsPerPage = 10;

  useEffect(()=>{
    const fatchData = async()=>{
      const response = await axios.get("http://localhost:8050");
      setProducts(response.data);
    }
    fatchData();
  }, [])


  const indexOfLastItem = (currentPage + 1) * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = products.slice(indexOfFirstItem, indexOfLastItem);

  const handlePageChange = ({ selected }) => {
    setCurrentPage(selected);
  };


  return (
    <div className=' mt-5 w-[95%] m-auto rounded-lg shadow-md  bg-slate-100 px-3 py-4 box-shadow'>
      <div className=' flex justify-between '>

        <form>   
          <div className="relative">
            <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
              <svg className="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
              </svg>
            </div>
              <input onChange={(e)=>setSearchByCountry(e.target.value)} type="search" id="default-search" className=" py-2 px-5 ps-10 text-sm outline-none text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:border-2 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Search by Country...." required />
          </div>
        </form>
        <form>
          <div className="relative">
              <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                <svg className="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                  <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
                </svg>
              </div>
              <input onChange={(e)=>setSearchbyRegino(e.target.value)} type="search" id="default-search" className=" py-2 px-5 ps-10 text-sm outline-none text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:border-2 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Search by Region...." required />
          </div>
        </form>

        <form>   
          <div className="relative">
            <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
              <svg className="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
              </svg>
            </div>
            <input onChange={(e)=>setEndYear(e.target.value)} type="search" id="default-search" className=" py-2 px-5 ps-10 text-sm outline-none text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:border-2 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Search by End-Year...." required />
          </div>
        </form>
        
        <form>   
          <div className="relative">
            <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
              <svg className="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
              </svg>
            </div>
            <input onChange={(e)=>setTopic(e.target.value)} type="search" id="default-search" className=" py-2 px-5 ps-10 text-sm outline-none text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:border-2 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Search by Topic...." required />
          </div>
        </form>

        <form>   
          <div className="relative">
            <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
              <svg className="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
              </svg>
            </div>
            <input onChange={(e)=>setSector(e.target.value)} type="search" id="default-search" className=" py-2 px-5 ps-10 text-sm outline-none text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:border-2 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Search by Sector...." required />
          </div>
        </form>

        <form>   
          <div className="relative">
            <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
              <svg className="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
              </svg>
            </div>
              <input onChange={(e)=>setSource(e.target.value)} type="search" id="default-search" className=" py-2 px-5 ps-10 text-sm outline-none text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:border-2 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Search by Source...." required />
          </div>
        </form>
      </div>

      <div className="relative mt-2 overflow-x-auto sm:rounded-lg box-shadow">
        {
          products.length === 0 ? (<p className=' text-center py-7 font-bold'>Loading.....</p>) : (
            <>
              <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                    <tr>
                        <th scope="col" className="px-6 py-3">
                          S.No
                        </th>
                        <th scope="col" className="px-6 py-3">
                          Country
                        </th>
                        <th scope="col" className="px-6 py-3">
                          Region
                        </th>
                        <th scope="col" className="px-6 py-3">
                          sector
                        </th>
                        <th scope="col" className="px-6 py-3">
                          Topics
                        </th>
                        <th scope="col" className="px-6 py-3">
                            Year
                        </th>
                        <th scope="col" className="px-6 py-3">
                            Intensity
                        </th>
                        <th scope="col" className="px-6 py-3">
                            Likelihood
                        </th>
                        <th scope="col" className="px-6 py-3">
                            Relevence
                        </th>
                    </tr>
                </thead>
                <tbody>
                  {
                    currentItems.filter((product)=>{
                      return searchByCountry.toLowerCase() === "" ? product : product.country.toLowerCase().includes(searchByCountry)
                    }).filter((product)=>{
                      return searchbyRegion.toLowerCase() === "" ? product : product.region.toLowerCase().includes(searchbyRegion)
                    }).filter((product)=>{
                      return endYear.toLowerCase() === "" ? product : product.end_year.toLowerCase().includes(endYear)
                    }).filter((product)=>{
                      return topic.toLowerCase() === "" ? product : product.topic.toLowerCase().includes(topic)
                    }).filter((product)=>{
                      return sector.toLowerCase() === "" ? product : product.sector.toLowerCase().includes(sector)
                    }).filter((product)=>{
                      return source.toLowerCase() === "" ? product : product.source.toLowerCase().includes(source)
                    }).map((product, index)=>{
                      const serialNumber = indexOfFirstItem+index+1;
                      return(
                        <tr key={product._id} className={`${index % 2 === 0 ? 'bg-white' : 'bg-gray-50 dark:bg-gray-800'} border-b dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600`}>
                          <td className="px-6 py-4">
                            {serialNumber}
                          </td>
                          <td className="px-6 py-4">
                            {product.country ? product.country : "Null"}
                          </td>
                          <td className="px-6 py-4">
                            {product.region ? product.region : "Null"}
                          </td>
                          <td className="px-6 py-4">
                            {product.sector ? product.sector : "Null"}
                          </td>
                          <td className="px-6 py-4">
                            {product.topic.charAt(0).toUpperCase() + product.topic.slice(1)}
                          </td>
                          <td className="px-6 py-4">
                              {product.end_year ? product.end_year : "Null"}
                          </td>
                          <td className="px-6 py-4">
                              {product.intensity}
                          </td>
                          <td className="px-6 py-4">
                              {product.likelihood}
                          </td>
                          <td className="px-6 py-4">
                              {product.relevance}
                          </td>
                        </tr>
                      )
                    })
                  }
                </tbody>
              </table>
              <div className="pagination-container">
                <ReactPaginate
                  previousLabel={'Previous'}
                  nextLabel={'Next'}
                  breakLabel={'.....'}
                  breakClassName={'break-me'}
                  pageCount={Math.ceil(products.length / itemsPerPage)}
                  marginPagesDisplayed={3}
                  pageRangeDisplayed={5}
                  onPageChange={handlePageChange}
                  containerClassName={'pagination'}
                  activeClassName={'active'}
                />
              </div>
            </>
          )
        }
      </div>
    </div>
  )
}

export default Products;
