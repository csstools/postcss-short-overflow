import postcss from 'postcss';

export default postcss.plugin('postcss-short-overflow', opts => {
	// get the dashed prefix
	const prefix = 'prefix' in Object(opts) ? `-${opts.prefix}-` : '';

	// get the (conditionally prefixed) property pattern
	const propertyRegExp = new RegExp(`^${prefix}(overflow)$`);

	return root => {
		// walk each matching declaration
		root.walkDecls(propertyRegExp, decl => {
			// conditionally remove the prefix from the property
			const [, property] = decl.prop.match(propertyRegExp);

			if (prefix) {
				decl.prop = property;
			}

			// conditionally update multiple overflow values
			var [overflowX, overflowY] = postcss.list.space(decl.value);

			if (overflowY) {
				if (overflowX !== '*') {
					decl.cloneBefore({ prop: 'overflow-x', value: overflowX });
				}

				if (overflowY !== '*') {
					decl.cloneBefore({ prop: 'overflow-y', value: overflowY });
				}

				decl.remove();
			}
		});
	};
});
