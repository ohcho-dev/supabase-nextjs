"use client"

import supabase from "@/utils/supabase";
import { use } from "react"

async function getData() {
    const { data, error } = await supabase.from('parks').select()
    return { data };
}

export default function ClientSide() {
    const data = use(getData());
    
    return <pre>{JSON.stringify(data, null, 2)}</pre>
}