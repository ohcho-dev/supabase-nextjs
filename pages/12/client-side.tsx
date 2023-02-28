import supabase from "@/utils/supabase";
import loadConfig from "next/dist/server/config";
import { useEffect, useState } from "react"

export default function ClientSide() {
    const [data, setData] = useState<any>(null);
    const [loading, setLoading] = useState<boolean>(true);

    useEffect(() => {
        const getData = async () => {
            const { data, error } = await supabase.from('parks').select()
            console.log(data)
            setLoading(false)
            setData(data)
        }

        getData()
    }, [])
    return loading ? <p>loading... </p>: 
        <pre>{JSON.stringify(data, null, 2)}</pre>
    
}