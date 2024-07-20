const useDate = () => {
    const formatDate = (dateString) => {
        const options = { year: 'numeric', month: 'long', day: 'numeric' }
        const date = new Date(dateString)
        return date.toLocaleDateString('en-US', options)
    }
    return { formatDate }
}

export default useDate
