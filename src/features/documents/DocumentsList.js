import { useGetDocumentsQuery } from "./documentsApiSlice";

const DocumentsList = () => {

    const {
        data: doccuments,
        isLoading,
        isSuccess,
        isError,
        error
    } = useGetDocumentsQuery('documentsList', {
        pollingInterval: 60000,
        refetchOnFocus: true,
        refetchOnMountOrArgChange: true
    })

    if (isSuccess) {
        const { ids, entities } = doccuments
        const tableContent = ids?.length && filteredIds.map(noteId => <Note key={noteId} noteId={noteId} />)

    }


    return (
        <div>DocumentsList</div>
    )
}

export default DocumentsList