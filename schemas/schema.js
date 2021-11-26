// First, we must import the schema creator
import createSchema from 'part:@sanity/base/schema-creator'

// Then import schema types from any plugins that might expose them
import schemaTypes from 'all:part:@sanity/base/schema-type'

// Then we give our schema to the builder and provide the result to Sanity
export default createSchema({
  // We name our schema
  name: 'default',
  // Then proceed to concatenate our document type
  // to the ones provided by any plugins that are installed
  types: schemaTypes.concat([
    {
      title: "Шинэ дуу оруулах",
      name: "post",
      type: "document",
      fields:[
        {
          title:'Аудио файлын нэр',
          name:"AudioFile",
          type:'file',
        },
        {
          title:'Нэр',
          name:"names",
          type:'string',
        },
        {
          title:'Нас',
          name:"age",
          type:'reference',
          to:[{type:'age'}]
        },
        {
          title:'Хүйс',
          name:"Gender",
          type:'reference',
          to:[{type:'Gender'}]
        },
        {
          title:'Хэл',
          name:"publisher",
          type:'reference',
          to:[{type:'publisher'}]
        },
        {
          title:'Туршлага',
          name:"Level",
          type:'string',
        },
        {
          title:'Огно',
          name:"date",
          type:'datetime',
        },
      ]
    },
    {
      title: "Хэл нэмэх",
      name: "publisher",
      type: "document",
      fields:[
        {
          title:"Сонгогдох хэл",
          name:"title",
          type:"string",
        },
      ],
    },
    {
      title: "Хүйс нэмэх",
      name: "Gender",
      type: "document",
      fields:[
        {
          title:"Сонгогдох хүйс",
          name:"title",
          type:"string",
        },
      ],
    },
    {
      title: "Нас нэмэх",
      name: "age",
      type: "document",
      fields:[
        {
          title:"Сонгогдох нас",
          name:"title",
          type:"string",
        },
      ],
    }
  ]),
})
