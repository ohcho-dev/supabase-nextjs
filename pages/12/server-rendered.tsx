import supabase from "@/utils/supabase"

export async function getServerSideProps() {
    await new Promise(resolve => {
        setTimeout(() => {
            resolve(true);
        }, 3000)
    })
    const { data } = await supabase.from('parks').select();

    return {
        props: {
            data,
        }
    }
}

export default function SSR({ data }: { data: any }) {
    return <pre>{JSON.stringify(data, null, 2)}</pre>
}