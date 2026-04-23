require('datejs');

function combineUsers(...args) {

  const combinedObject = {
    users: []
  };

  args.forEach(arr => {
    combinedObject.users.push(...arr);
  });

  const today = new Date();
  combinedObject.merge_date = today.toLocaleDateString("en-US");

  return combinedObject;
}


module.exports = {
  ...(typeof combineUsers !== 'undefined' && { combineUsers })
};