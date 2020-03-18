$(function() {
    $("input[value='Delete']").click(function(event) {
        event.preventDefault();

        const deleteButton = $(this);
        if (deleteButton.val() === 'Delete') {
            $.post(`/message/${deleteButton.data('id')}/delete`, function() {
                const cardColumn = deleteButton.parents('.col-md-4').first();
                cardColumn.hide('slow').queue(function() {
                    $(this).remove();
                });
            });
        } else {
            const editButton = deleteButton.parent().next().find("input");
            editButton.attr('disabled', true);
            deleteButton.attr('disabled', true);

            const content = deleteButton.parents('.clearfix').prevAll('.card-text');
            const input = content.next();
            input.hide('slow', function() {
                content.show('slow', function() {
                    input.remove();
                    editButton.val('Edit');
                    deleteButton.val('Delete');
                    editButton.attr('disabled', false);
                    deleteButton.attr('disabled', false);
                });
            });
        }
    });

    $("input[value='Edit']").click(function(event) {
        event.preventDefault();

        const editButton = $(this);
        if (editButton.val() === 'Edit') {
            const deleteButton = editButton.parent().prev().find("input");
            editButton.attr('disabled', true);
            deleteButton.attr('disabled', true);

            const content = editButton.parents('.clearfix').prevAll('.card-text');
            content.hide('slow', function() {
                const input = $(`<textarea>${content.text()}</textarea>`);
                input.hide().insertAfter(content).show('slow', function() {
                    editButton.attr('disabled', false);
                    deleteButton.attr('disabled', false);

                    editButton.val('Done');
                    deleteButton.val('Cancel');
                });
            });
        } else {
            const deleteButton = editButton.parent().prev().find("input");
            editButton.attr('disabled', true);
            deleteButton.attr('disabled', true);

            const content = deleteButton.parents('.clearfix').prevAll('.card-text');
            const input = content.next();

            const data = { 'content': input.val() }
            $.post(`/message/${editButton.data('id')}/edit`, data, function() {
                input.hide('slow', function() {
                    content.text(input.val());
                    content.show('slow', function() {
                        input.remove();
                        editButton.val('Edit');
                        deleteButton.val('Delete');
                        editButton.attr('disabled', false);
                        deleteButton.attr('disabled', false);
                    });
                });
            });
        }
    });
});
