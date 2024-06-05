import { useDraggable, useDroppable } from '@dnd-kit/core'
import React from 'react'

const KanbanItem = () => {
    const {attributes, listeners, setNodeRef, active} = useDraggable({
        id: "",
        data: ""
    })
  return (
    <div>KanbanItem</div>
  )
}

export default KanbanItem