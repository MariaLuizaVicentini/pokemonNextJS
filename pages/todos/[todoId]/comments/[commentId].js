import Link from "next/link";
import { useRouter } from "next/router";

export default function Comments() {
    const router = useRouter()
    const todoId = router.query.todoId
    const commentId = router.query.commentId


    return (
        <>
            <Link href={`/todos/${todoId}`} legacyBehavior>
                <a>Voltar</a>
            </Link>

            <h1>Exibindo o Comentário número: {commentId}</h1>
            <p>Do todo: {todoId}</p>
        </>
    )
}