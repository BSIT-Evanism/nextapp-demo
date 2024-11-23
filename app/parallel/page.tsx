

export default async function Page() {

    const wait = () => new Promise((resolve) => setTimeout(() => {
resolve("hello")
    }, 2000))

    await wait()

    return (
        <div className="w-[50vw] flex border justify-center items-center">
        <h1>Im a child</h1>
        </div>
    )
}