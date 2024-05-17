// this component is the delete button showen in every blog 
"use client";

import { DeleteOutlined } from "@ant-design/icons";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function RemoveBtn({ id, onRemove }) {
    const router = useRouter();
    const [loading, setLoading] = useState(false);

    const removeBlog = async () => {
        setLoading(true);
        
            try {
                const res = await fetch(`http://localhost:3000/api/blogs?id=${id}`, {
                    method: "DELETE",
                });

                if (res.ok) {
                    onRemove(id); // Update the state after successful deletion
                }
            } catch (error) {
                console.error("Error deleting blog:", error);
            } finally {
                setLoading(false);
            }
        
    };

    return (
        <DeleteOutlined onClick={removeBlog} disabled={loading} />
    );
}
