

export default async function Page() {

    const wait = () => new Promise((resolve) => setTimeout(() => {
resolve("hello")
    }, 4000))

    await wait()

    throw new Error("I am an error")

    return (
        <div className="w-[50vw] flex border justify-center items-center">
        <h1>Im a child</h1>
        </div>
    )
}