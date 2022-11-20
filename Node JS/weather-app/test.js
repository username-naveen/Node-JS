const _ = require('lodash');
const publicLinkEvents = ['LINK_GENERATED', 'LINK_ACCESSED', 'LINK_DOWNLOAD', 'LINK_REVOKED'];

function modifiedData(type) {
  const res = {
    'isTrue': 'Yes',
    'isFalse': 'No',
    'default': 'N/A',
  }
  return (res[type] || res['default']);
};

const transformData = (data, urlData) => {
  const k = [];
  data.forEach((item) => {
    if (item.action.toLowerCase() === 'share') {
      const length = item.details && item.details.shares.length;
      if (length > 0) {
        const { details } = item;
        const { shares, expiry } = details;
        let isExpiry = expiry ? 'Yes' : 'N/A';
        isExpiry = isExpiry;
        for (let i = 0; i < length; i++) {
          let roles = _.startCase(shares[i].role && shares[i].role.toLowerCase()) || 'N/A';
          roles = roles;
          const share = Object.assign({}, shares[i], { role: roles });
          const detail = Object.assign({}, details, { shares: share, expiry: isExpiry });
          const s = Object.assign({}, item, { details: detail });
          k.push(s);
        }
      }
    } else if (publicLinkEvents.indexOf(item.action) > -1) {
      const { details, created_by } = item;
      const { link = {}, resource } = details;
      created_by.linkAccessIP = created_by.linkAccessIP || {};
      created_by.linkAccessIP.IP = created_by.linkAccessIP.IP ||'N/A';
      details.link = details.link || {};
      let modifiedUrl;
      if (_.isObject(details.link) && !_.isEmpty(details.link)) {
        link.expiry = link.expiry ? 'isTrue' : 'isFalse';
        link.password = link.password ? 'isTrue' : 'isFalse';
        if (resource.resourceType === 1) {
          modifiedUrl = `${urlData}${'/views/folder/public/viewFolder.html?shortLink='}${link.code}`;
        } else {
          modifiedUrl = `${urlData}${'/pdfjs/web/viewer.html?shortLink='}${link.code}`;
        }
      } else {
        link.expiry = '';
        link.password = '';
        modifiedUrl = 'N/A';
      }
      link.password = modifiedData(link.password);
      link.expiry = modifiedData(link.expiry);
      const passwordSet = link.password;
      const expirySet = link.expiry;
      const links = Object.assign({}, link, { expiry: expirySet, password: passwordSet, code: modifiedUrl });
      const detail = Object.assign({}, details, {resource, link:links });
      const items = Object.assign({}, item, {details:detail });
      k.push(items);
    } else {
      k.push(item);
    }
  });
  return k;
};

    const url = 'https://example.core.opentext.com';
    const publicInput = [{
      action: 'LINK_GENERATED',
      details: {
        resource: {
          name: 'exampleDoc.txt',
          resourceType: 2
        },
        // link: {
        //   code: '135fa9c3abeef0a297e3013081e6571e31684b6bf458f348',
        //   password: false,
        //   expiry: '2022-09-22T10:18:37.567Z',
        // }
      },
      created_by: {
        email: 'tenant+ent@opentext.com',
        // linkAccessIP: {
        //   IP: '120.12212.1212'
        // }
      }
    }];
    const publicResponse = [{
      action: 'LINK_GENERATED',
      details: {
        resource: {
          name: 'exampleDoc.txt',
          resourceType: 2
        },
        link: {
          // code: 'https://example.core.opentext.com/pdfjs/web/viewer.html?shortLink=135fa9c3abeef0a297e3013081e6571e31684b6bf458f348',
          code: 'N/A',
          password: 'N/A',
          expiry: 'N/A'
        }
      },
      created_by: {
        email: 'tenant+ent@opentext.com',
        linkAccessIP: { IP: 'N/A' }
      }
    }];
    
    const a = JSON.stringify(transformData(publicInput, url))
    const b = JSON.stringify(publicResponse)
    console.log(a);
    console.log(b);
    console.log(a === b)
