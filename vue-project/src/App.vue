<script setup lang="ts">
import {
  PersianDatePicker,
  PersianCalendar,
  PersianButton,
  PersianCircleLoading,
  PersianLinearLoading,
  PersianModal,
  PersianTooltip,
  PersianTypography,
  ControlledCheckbox,
  SwitchField,
  FormProvider,
  SelectField,
  ColorPicker,
  TimePicker,
  UploadField,
  PersianTreeMap
} from 'persian-components/dev'
</script>

<template>
  <div style="display: flex; flex-direction: column; gap: 40px">
    <div style="display: flex; gap: 40px">
      <div style="width: 50%; display: flex; flex-direction: column; margin-bottom: 40px">
        <code>{{`<PersianDatePicker />`}}</code>
        <PersianDatePicker />
      </div>
      <div style="width: 50%; display: flex; flex-direction: column; margin-bottom: 40px">
        <code>{{ `<PersianDatePicker modal />` }}</code>
        <PersianDatePicker modal />
      </div>
    </div>
    <div style="display: flex; gap: 40px">
      <div style="width: 50%; display: flex; flex-direction: column; margin-bottom: 40px">
        <code>{{`<PersianLinearLoading show />`}}</code>
        <PersianLinearLoading :show="true" />
      </div>
      <div style="width: 50%; display: flex; flex-direction: column; margin-bottom: 40px">
        <code>{{`<PersianCircleLoading />`}}</code>
        <PersianCircleLoading />
      </div>
    </div>
    <div style="display: flex; gap: 40px">
      <div style="width: 50%; display: flex; flex-direction: column; margin-bottom: 40px">
        <code>{{`<PersianModal />`}}</code>
        <PersianModal modal-id="modal" />
      </div>
      <div style="width: 50%; display: flex; flex-direction: column; margin-bottom: 40px">
        <code>{{`<PersianButton active>دکمه</PersianButton>`}}</code>
        <PersianButton active>دکمه</PersianButton>
      </div>
    </div>
    <div style="display: flex; gap: 40px">
      <div style="width: 50%; display: flex; flex-direction: column; margin-bottom: 40px">
        <code>{{`<PersianTypography text="چهارشنبه ها" />`}}</code>
        <PersianTypography text="چهارشنبه ها" />
      </div>
      <div style="width: 50%; display: flex; flex-direction: column; margin-bottom: 40px">
        <code>{{`<PersianTooltip />`}}</code>
        <PersianTooltip>
          <template #content>متن</template>
          <template #tooltip-action>تولتیپ</template>
        </PersianTooltip>
      </div>
    </div>
    <div style="display: flex; gap: 40px">
      <div style="width: 50%; display: flex; flex-direction: column; margin-bottom: 40px">
        <code>{{`<PersianInput /> readonly`}}</code>
        <PersianInput />
      </div>
      <div style="width: 50%; display: flex; flex-direction: column; margin-bottom: 40px">
        <code>{{`<PersianCalendar />`}}</code>
        <PersianCalendar />
      </div>
    </div>
    <div style="display: flex; gap: 40px">
      <div style="width: 50%; display: flex; flex-direction: column; margin-bottom: 40px">
        <code>{{`<ControlledCheckbox />`}}</code>
        <FormProvider name="aaa">
          <ControlledCheckbox label="test" id="test" />
        </FormProvider>
      </div>
      <div style="width: 50%; display: flex; flex-direction: column; margin-bottom: 40px">
        <code>{{`<SwitchField />`}}</code>
        <SwitchField label="test SwitchField " id="aaaasdas" />
      </div>
    </div>
    <div style="display: flex; gap: 40px">
      <div style="width: 50%; display: flex; flex-direction: column; margin-bottom: 40px">
        <code>{{`<SelectField />`}}</code>
        <SelectField
          :options="[
            { value: 'option1', label: 'Option 1' },
            { value: 'option2', label: 'Option 2' },
            { value: 'option3', label: 'Option 3' }
          ]"
          id="asd"
        />
      </div>
      <div style="width: 50%; display: flex; flex-direction: column; margin-bottom: 40px">
        <code>{{`<ColorPicker />`}}</code>
        <ColorPicker />
      </div>
    </div>
    <div style="display: flex; gap: 40px">
      <div style="width: 50%; display: flex; flex-direction: column; margin-bottom: 40px">
        <code>{{`<TimePicker />`}}</code>
        <TimePicker />
      </div>
      <div style="width: 50%; display: flex; flex-direction: column; margin-bottom: 40px">
        <code>{{`<UploadField />`}}</code>
        <UploadField />
      </div>
    </div>
    <div style="display: flex; gap: 40px">
      <div style="width: 50%; display: flex; flex-direction: column; margin-bottom: 40px">
        <code>{{`<PersianTreeMap />`}}</code>
        <PersianTreeMap />
      </div>
      <div style="width: 50%; display: flex; flex-direction: column; margin-bottom: 40px"></div>
    </div>
  </div>
</template>
