const Cart = ({selectedCourse}) => {
    console.log(selectedCourse);
    return (
        <div>
            <div className="bg-white p-6 rounded-xl">
                <h2 className="text-lg font-bold text-[#2F80ED] pb-4 border-b">Credit Hour Remaining 7 hr</h2>
                <div className="">
                    <h2 className="text-xl font-bold mt-4 mb-5">Course Name</h2>
                    <ol className="list-decimal pl-4 text-sm text-gray-600 pb-6 border-b">
                        {
                            selectedCourse.map(course => <li key={course.id}>{course.title}</li>)
                        }
                        {/* <li>1 Web Development Bootcamp</li>
                        <li>2 Data Structures and Algorithms</li>
                        <li>3 Software Engineering</li> */}
                    </ol>
                    <p className="py-4 border-b font-medium">Total Credit Hour: 13</p>
                    <p className="py-4 font-semibold">Total Price: 500 USD</p>
                </div>
            </div>
        </div>
    );
};

export default Cart;