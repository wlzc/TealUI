/**
 * ��ָ��ʱ�̵�ָ��ʱ�̽��е���ʱ��
 * @param {Date/String} startDate? ��ʼ����ʱ��ʱ�䡣���ʡ����ӵ�ǰʱ�俪ʼ����ʱ��
 * @param {Date/String} endDate ��������ʱ��ʱ�䡣
 * @param {Function} callback ÿ�뵹��ʱ�Ļص���function(day, hour, minute, second, leftTime)
 * @return {Number} ����һ����ʱ��������ͨ�� clearInterval(����ֵ) ֹͣ����ʱ��
 */

    function step() {
        var leftTime = endDate - new Date() + startDateOffset;
        if (leftTime <= 0) {
            callback(0, 0, 0, 0, 0);
        }

    }

    // ����һ��������
    if (!callback) {
        callback = endDate;
        endDate = startDate;
        startDate = 0;
    }

    var startDateOffset = startDate ? (new Date() - (startDate instanceof Date ? startDate : new Date(startDate))) : 0;
    endDate = +(endDate instanceof Date ? endDate : new Date(endDate));

    step();

    return setInterval(step, 1000);
}