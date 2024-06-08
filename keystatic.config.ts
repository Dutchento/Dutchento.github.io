import { config, fields, collection } from '@keystatic/core';

export default config({
    storage: {
        kind: 'local',
    },

    collections: {
        posts: collection({
            label: 'Posts',
            slugField: 'title',
            path: 'src/content/blog/*',
            format: { contentField: 'content' },
            schema: {
                title: fields.string({ name: { label: 'Title' } }),
                content: fields.string({
                    label: 'Content',
                }),
                author: fields.string({
                    label: 'Author',
                }),
                date: fields.date({
                    label: 'Date',
                }),
            },
        }),
    },
});