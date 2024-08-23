import axios from "axios"

export const bitcoinService = {
    getRate,
    getMarketPriceHistory,
    getAvgBlockSize,
}

async function getRate() {
    const url = 'https://blockchain.info/tobtc?currency=USD&value=1'
    return axios.get(url)
        .then(res => res.data)
        .catch(error => {
            console.error('error fetching bitcoin rate:', error)
            throw error
        })
}

const API_BASE_URL = 'https://api.blockchain.info/charts/'

async function getMarketPriceHistory() {
    const url = `${API_BASE_URL}market-price?timespan=5months&format=json&cors=true`;
    return axios.get(url)
        .then(res => res.data.values) 
        .catch(error => {
            console.error('Error fetching market price history:', error);
            throw error;
        });
}

async function getAvgBlockSize() {
    const url = `${API_BASE_URL}avg-block-size?timespan=5months&format=json&cors=true`;
    return axios.get(url)
        .then(res => res.data.values) 
        .catch(error => {
            console.error('Error fetching average block size:', error);
            throw error;
        });
}