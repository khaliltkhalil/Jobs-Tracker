import { FormRow, FormRowSelect } from "."
import { useAppContext } from "../context/appContext"
import Wrapper from "../assets/wrappers/SearchContainer"
const SearchContainer = () => {
    const {
        isLoading,
        search,
        searchStatus,
        statusOptions,
        searchType,
        jobTypeOptions,
        sort,
        sortOptions,
        handleChange,
        clearFilter
    } = useAppContext()
    const handleSearch = (e) => {
        if (isLoading) return
        handleChange({ name: e.target.name, value: e.target.value })
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        clearFilter()
    }
    return (
        <Wrapper>
            <form className="form">
                <h4>search form</h4>

                <div className="form-center">
                    {/* position */}
                    <FormRow
                        type='text'
                        name='search'
                        value={search}
                        handleChange={handleSearch}
                    />
                    <FormRowSelect
                        name='searchStatus'
                        value={searchStatus}
                        handleJobInput={handleSearch}
                        options={['all', ...statusOptions]}
                        labelText='status' />
                    <FormRowSelect
                        name='searchType'
                        value={searchType}
                        handleJobInput={handleSearch}
                        options={['all', ...jobTypeOptions]}
                        labelText='job type' />
                    <FormRowSelect
                        name='sort'
                        value={sort}
                        handleJobInput={handleSearch}
                        options={sortOptions}
                        labelText='sort' />
                    <button

                        className="btn btn-block btn-danger" disabled={isLoading}
                        onClick={handleSubmit}
                    >
                        clear
                    </button>
                </div>
            </form>
        </Wrapper>
    )
}

export default SearchContainer