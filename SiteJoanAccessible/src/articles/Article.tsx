import './Article.css';

const Article = () => {
    return (
        <>
            <article className="article" aria-label="Main content of the article">
                <h1 className="font-black-600 text-3xl p-9">Web dev</h1>
                <p className="px-9">JavaScript is the world's most
                    popular lightweight, interpreted, or just-in-time
                    compiled
                    programming
                    language. It is also known as the scripting language for web pages. It is well-known for the
                    development
                    of interactive and dynamic web pages. However, many non-browser environments also use it, such as
                    Node.js, Apache CouchDB, and Adobe Acrobat.

                    JavaScript can be used for client-side development, which means the code runs on the user's browser
                    and
                    is used to enhance the user interface and experience of web pages. Common client-side operations
                    include
                    form validation, dynamic content updates without refreshing the page (using AJAX), and handling user
                    events like mouse clicks and keyboard input.

                    In addition to client-side development, JavaScript is also used for server-side development. This
                    involves running JavaScript on a server to handle requests, manage databases, and perform other
                    back-end
                    tasks. Node.js, a runtime environment for JavaScript, is a popular choice for server-side
                    development
                    due to its non-blocking, event-driven architecture, which allows it to handle many connections
                    simultaneously.

                    Overall, JavaScript's ability to function across both client and server environments, combined with
                    its
                    ease of use and powerful features, has cemented its status as a cornerstone of modern web
                    development. </p>
                <table className="px-9 styled-table mx-auto">
                    <caption className="text-2xl py-4">Table</caption>
                    <thead>
                    <tr>
                        <th>Header 0</th>
                        <th>Header 1</th>
                        <th>Header 2</th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr>
                        <td>Data 0</td>
                        <td>Data 1</td>
                        <td>Data 2</td>
                    </tr>
                    <tr>
                        <td>Data 0</td>
                        <td>Data 1</td>
                        <td>Data 2</td>
                    </tr>
                    <tr>
                        <td>Data 0</td>
                        <td>Data 1</td>
                        <td>Data 2</td>
                    </tr>
                    <tr>
                        <td>Data 0</td>
                        <td>Data 1</td>
                        <td>Data 2</td>
                    </tr>
                    </tbody>
                    <tfoot>
                    <tr>
                        <td>Footer 0</td>
                        <td>Footer 1</td>
                        <td>Footer 2</td>
                    </tr>
                    </tfoot>
                </table>
            </article>
            <aside className="comments px-12 pb-4" id="comments" aria-label="comments section">
                <h2 className="text-black text-2xl font-bold">Comments:</h2>
                {Array(6).fill(null).map((_, index) => (
                    <div key={index} className="comment py-2">
                        <p>RandomUser123:</p>
                        <p>Comment {index + 1}</p>
                    </div>
                ))}
            </aside>
        </>
    );
};

export default Article;