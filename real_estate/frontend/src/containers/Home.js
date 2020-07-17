import React, { useState } from 'react'
import { Helmet } from 'react-helmet'

// components
import ListingForm from "../components/ListingForm"
import Listings from "../components/Listings"
import Pagination from "../components/Pagination"



const Home = () => {
    const [listings, setListings] = useState([])
    const [currentPage, setCurrentPage] = useState(1);
    const [listingsPerPage, setListingsPerPage] = useState(3);
    const [active, setActive] = useState(1);

    const indexOfLastListing = currentPage * listingsPerPage
    const indexOfFirstListing = indexOfLastListing - listingsPerPage
    const currentListings = listings.slice(indexOfFirstListing, indexOfLastListing)

    const visitPage = (page) => {
        setCurrentPage(page)
        setActive(page)
    }

    return(
        <div>
            
        </div>
    )
}

export default Home