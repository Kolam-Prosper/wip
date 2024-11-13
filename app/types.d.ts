import { Params } from 'next/dist/shared/lib/router/utils/route-matcher'

declare module 'next' {
    export interface PageProps {
        params: Params
        searchParams?: { [key: string]: string | string[] | undefined }
    }
}