const keyMirror1 = (strs)=>strs.reduce((r, c)=>({
            ...r,
            [c]: c
        })
    , {
    })
;
const handleObjkeys = (obj, cb)=>{
    const keys = Object.keys(obj);
    return Array.isArray(keys) && keys.length !== 0 ? cb === undefined ? obj : cb(keys) : {
    };
};
const cfxify1 = {
    react: (h)=>(e)=>(props, children)=>h(e, {
                    ...props,
                    ...children === undefined ? {
                    } : {
                        children
                    }
                })
    ,
    vue: (h)=>(e)=>(props, children)=>h.apply(null, [
                    e,
                    props,
                    ...children === undefined ? [] : [
                        children
                    ]
                ])
};
const cfxifys1 = (cfx)=>(tags)=>Object.keys(tags).reduce((r, tagName)=>({
                ...r,
                [tagName]: cfx(tags[tagName])
            })
        , {
        })
;
const accC = (Dom, attr)=>new Proxy(()=>{
    }, {
        get: (target, property)=>(v)=>accC(Dom, {
                    ...attr,
                    [property]: v
                })
        ,
        apply: (target, thisBinding, children)=>Dom.apply(null, [
                attr,
                ...children.length === 0 ? [] : [
                    children
                ]
            ])
    })
;
const D = (C)=>Object.keys(C).reduce((r, c)=>({
            ...r,
            [c]: accC(C[c], {
            })
        })
    , {
    })
;
const cfx1 = (options, compTags)=>{
    const engineName = Object.keys(options).includes('react') ? 'react' : Object.keys(options).includes('vue') ? 'vue' : Object.keys(options).includes('dom') ? 'dom' : 'vue';
    return D(cfxifys1(cfxify1[engineName === 'dom' ? 'vue' : engineName](options[engineName]))(compTags));
};
const E = new Proxy({
}, {
    get: (target, property)=>{
        target.hasOwnProperty('comps') || (target.comps = {
        });
        target.hasOwnProperty('engine') || (target.engine = {
        });
        return [
            'react',
            'vue',
            'dom'
        ].includes(property) ? (engine, self)=>{
            target.engine = {
                [property]: engine
            };
            return self;
        } : property === 'comps' ? (Comps = {
        })=>{
            target.comps = cfx1(target.engine, {
                ...handleObjkeys(target.comps, (keys)=>keyMirror1(keys)
                ),
                ...handleObjkeys(Comps)
            });
            return target.comps;
        } : (()=>{
            target.comps[property] = property;
            return new Proxy(()=>{
            }, {
                get: (t, p)=>(v)=>{
                        return target.comps[property][p](v);
                    }
                ,
                apply: (t, b, a)=>target.comps[property](a)
            });
        })();
    }
});
export { cfxify1 as cfxify, cfxifys1 as cfxifys, keyMirror1 as keyMirror, cfx1 as cfx };
export { E as default };
