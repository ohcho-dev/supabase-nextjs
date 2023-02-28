import supabase from "@/utils/supabase"

export async function getStaticProps() {
    await new Promise(resolve => {
        setTimeout(() => {
            resolve(true);
        }, 3000)
    })
    const { data } = await supabase.from('parks').select();

    return {
        props: {
            data,
        },
        revalidate: 10,
    }
}

export default function SSGRevalidate({ data }: { data: any }) {
    return <pre>{JSON.stringify(data, null, 2)}</pre>
}