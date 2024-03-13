import API from "../../../utils/API";

function Card() {
    const searchImg = () => {
        API.search()
            .then((res) => console.log(res))
            .catch((err) => console.log(err))
    }

    return (
        <div></div>
    )
}