import { Label } from "./ui/label"
import { RadioGroup, RadioGroupItem } from "./ui/radio-group"

const filterData = [
    {
        filterType: "Location",
        array: ["Delhi NCR", "Bangalore", "Hyderabad", "Pune", "Mumbai"]
    },
    {
        filterType: "Industry",
        array: ["Frontend Developer", "Backend Developer", "FullStack Developer"]
    },
    {
        filterType: "Salary",
        array: ["0-40k", "42-1 lakh", "1 lakh to 5 lakh"]
    },
    {
        filterType: "Experience",
        array: ["Freshers", "0-2 years", "3-5 years", "5-10 years"]
    },
    {
        filterType: "Work mode",
        array: ["Work from office", "Hybrid", "Remote"]
    }
]

const FilterCard = () => {
    return (
        <div className='w-full bg-white p-3 rounded-md'>
            <h1 className='font-bold text-lg'>Filter Jobs</h1>
            <hr className='mt-3' />
            <RadioGroup>
                {filterData.map((data, index) => (
                    <div key={index}>
                        <h1 className='font-bold text-lg'>{data.filterType}</h1>
                        {data.array.map((item) => {
                            // const itemId = `id${index}-${idx}`
                            return (
                                <div className='flex items-center space-x-2 my-2'>
                                    <RadioGroupItem value={item} />
                                    <Label>{item}</Label>
                                </div>
                            )
                        })}
                    </div>
                ))}
            </RadioGroup>
        </div>
    )
}

export default FilterCard
