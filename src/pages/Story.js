import React from 'react'
import Header from '../components/Header'
import Comment from '../components/Comment'

function Story() {
    return (
        <div style={{ height: '100%' }}>
            <Header />
            <div className="single-story">
                <h1>The standard Lorem Ipsum passage, used since the 1500s</h1>
                <p>
                    Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?
                </p>
                <section className="comments">
                    <h4>Comments</h4>
                    <div className="comment-box">
                        <form>
                            <textarea
                                placeholder="Write a comment here..."
                                name="comment"
                                onChange={() => console.log('test')}
                                required={true}
                            />
                            <button type="submit">Add Comment</button>
                        </form>
                    </div>
                    <Comment />
                    <Comment />
                    <Comment />
                    <Comment />
                </section>
            </div>
        </div>
    )
}

export default Story;