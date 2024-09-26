import { ChevronLeft, ChevronRight, ChevronsLeft, ChevronsRight } from "lucide-react"
import { Button } from "./button"

export interface Pagination {
    pagIndex: number
    totalCount: number
    perPage: number
}

export function Pagination({ pagIndex, perPage, totalCount}: Pagination) {
    const pages = Math.ceil(totalCount / perPage) || 1

    return (
        <div className="flex items-center justify-between">
            <span className="text-sm text-muted-foreground">
                Total de {totalCount} item(s)
            </span>
            <div className="flex items-center gap-6 lg:gap-8">
                <div className="text-sm font-medium">Pagina {pagIndex + 1} de {pages}</div>
                <div className="flex items-center gap-1">
                    <Button variant="outline" className="h-8 w-8 p-4.6">
                        <ChevronsLeft className="h-4 w-4" />
                        <span className="sr-only">Primeira pagina</span>
                    </Button>
                    <Button variant="outline" className="h-8 w-8 p-4.6">
                        <ChevronLeft className="h-4 w-4" />
                        <span className="sr-only">Pagina anterior</span>
                    </Button><Button variant="outline" className="h-8 w-8 p-4.6">
                        <ChevronRight className="h-4 w-4" />
                        <span className="sr-only">Proxima pagina</span>
                    </Button><Button variant="outline" className="h-8 w-8 p-4.6">
                        <ChevronsRight className="h-4 w-4" />
                        <span className="sr-only">Ultima pagina</span>
                    </Button>
                </div>
            </div>
        </div>
    )
}