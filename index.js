import postcss from 'postcss';

export default postcss.plugin('postcss-short-overflow', opts => {
	const prefix = 'prefix' in Object(opts) ? `-${opts.prefix}-` : '';
	const skip = 'skip' in Object(opts) ? String(opts.skip) : '*';

	// get the (conditionally prefixed) property pattern
	const overflowPropertyRegExp = new RegExp(`^${prefix}(overflow)$`);

	return root => {
		// walk each matching declaration
		root.walkDecls(overflowPropertyRegExp, decl => {
			// conditionally remove the prefix from the property
			const [, property] = decl.prop.match(overflowPropertyRegExp);

			if (prefix) {
				decl.prop = property;
			}

			// conditionally update multiple overflow values
			const [overflowX, overflowY] = postcss.list.space(decl.value);

			if (overflowY) {
				if (overflowX !== skip) {
					decl.cloneBefore({ prop: 'overflow-x', value: overflowX });
				}

				if (overflowY !== skip) {
					decl.cloneBefore({ prop: 'overflow-y', value: overflowY });
				}

				decl.remove();
			}
		});
	};
});
