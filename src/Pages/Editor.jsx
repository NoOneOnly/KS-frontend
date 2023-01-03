import React, {useState} from 'react'
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import parse from 'html-react-parser'

const Editor = () => {
  const [text, setText] = useState("")
  return (
    <div className='mt-12'>
      <div className="editor flex flex-wrap lg:flex-nowrap justify-center">
        <CKEditor
        editor={ClassicEditor}
        data={text}
        onchange={(event, editor) => {
          const data = editor.getData()
          setText(data)
          }}
          />
      </div>
      <div className="flex flex-wrap lg:flex-nowrap justify-center mt-5">
        <div className="bg-white dark:text-gray-200 dark:bg-secondary-dark-bg m-3 p-4 rounded-2xl md:w-780">


        <h2>Content</h2>
        
        <p className='bold'>{parse(text)}</p>
        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolor rem similique eos ab culpa maiores itaque, accusamus deleniti numquam ex maxime sunt aliquid impedit velit sed, id nulla. Officiis totam doloremque dolorem error facere dolorum porro possimus vitae, dolor corrupti cupiditate doloribus nihil! Similique, a eaque eum repudiandae adipisci expedita suscipit deserunt. Sequi tempore nihil explicabo voluptatem ex reiciendis ipsam, error nisi blanditiis doloribus laboriosam sapiente dolorum consequatur. Aut, nostrum id commodi tenetur odio asperiores vero dignissimos inventore fugiat facilis ab sed neque consequuntur assumenda odit iure quaerat. Delectus natus repellat fuga soluta cum reiciendis mollitia. Vero libero ipsam temporibus!</p>
        </div>
      </div>
    </div>
  )
}

export default Editor